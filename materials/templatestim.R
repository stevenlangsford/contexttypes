library(tidyverse)
library(patchwork)
rm(list = ls())
set.seed(4)
theme_set(theme_light())

##PARAMS
mindistance_prob <- .1 #rnd gen prob values must be in .1 : .9
mindistance_pay <- 3 #rnd gen pay vals must be > 3

decoration_on <- FALSE; #v1 doesn't use item or bg decorations! They're v2.

design_template <- function() {
    ##First creates a df with stim type specs (randomizing some uninteresting)
    ##shuffles these (ensuring 'old role' stim can't appear first)
    ##creates stim consistent with the specs using wedell-like features.

    ##Properties where you want to ring the changes:
    last_role <- c("novel", "novel", "novel",
                    "targ", "comp", "decoy") #1:1 balance for new vs old

    current_role <- c("targ", "comp", "decoy")

    item_consistent <- c(TRUE, FALSE) #2nd-wave property
    bg_consistent <- c(TRUE, FALSE) #2nd wave property

    stimdf <- data.frame()


    ##Properties you want to randomize & rugsweep:
        item_type <- c("ticket", "urn")
        bg_type <- c("ticket", "urn")

    ##build the thing:
    for (mylastrole in last_role) {
        for (myitem in item_consistent) {
            for (mybg in bg_consistent) {
                for (mycurrentrole in current_role) {
                    
                    myitemtype <-  sample(item_type, 1)
                    mybgtype <- sample(bg_type, 1)
                    
                    stimdf <- rbind(stimdf,
                                    data.frame(
                                        last_role = mylastrole,
                                        current_role = mycurrentrole,
                                        item_consistent = myitem,
                                        bg_consistent = mybg,
                                        item_type = myitemtype,
                                        bg_type = mybgtype
                                    ))
                }
            }
        }
    }
    ##shuffle order: but first trial must have 'novel' role
    stimdf <- sample_n(stimdf, nrow(stimdf))
    while (stimdf[1, "last_role"] != "novel") {
        stimdf <- rbind(stimdf[-1, ], stimdf[1, ])
    }
    names(stimdf) <- paste0("design_",names(stimdf))
    return(stimdf)
}

##end design template. Helpers for creating stim-to-order:
defunkify <- function(stimdf){
    
    isfunky <- function(arow) {
        ##ie. is extreme or impossible
        with(arow,
             targ_pay > 100 ||
             targ_pay < 0 ||
             targ_prob > .99 ||
             targ_prob < .01 ||
             comp_pay > 100 ||
             comp_pay < 0 ||
             comp_prob > .99 ||
             comp_prob < .01 ||
             decoy_pay > 100 ||
             decoy_pay < 0 ||
             decoy_prob > .99 ||
             decoy_prob < .01 ||
             abs(targ_prob - comp_prob) < .01 ||
             abs(targ_pay - comp_pay) < 1
             )
    }

    ##Re-do funky generated stim.
    ##Root cause of funkiness might be further back if related to prev stim?
    funkstatus <- sapply(1:nrow(stimdf), function(i) {
        isfunky(stimdf[i, ])
    })

    maxiter <- 1000
    
    while (any(funkstatus == TRUE) && maxiter > 0) {
        maxiter <- maxiter - 1
        for (i in 1:nrow(stimdf)) {
            if (funkstatus[i] == TRUE) {
                stimdf[i, ] <- append_stim(stimdf, i, i)
            }
        }
        
        funkstatus <- sapply(1:nrow(stimdf), function(i) {
            isfunky(stimdf[i, ])
        })
    
    }#while any(funkstatus==TRUE)
    return(stimdf)
}#end defunkify

fliptype <- function(atype) {
    if (atype == "urn"){
        return("ticket")
    }else{
        return("urn")
    }
}

rndoption <- function(mytype = c("ticket", "urn")[1]) {
    if (!mytype %in% c("ticket", "urn")) {
        stop(paste("bad mytype in rndoption:",mytype))
    }
    skewness <- 5

    getfeatures <- function() {
    if (mytype == "ticket") {
        myprob <- rbeta(1, skewness, 1)
        mypay <- rnorm(1, 20, 5) * rbeta(1, 1, skewness)
    } else {
        myprob <- rbeta(1, 1, skewness)
        mypay <- rnorm(1, 20, 5) * rbeta(1, skewness, 1)
    }
    return (list(prob = myprob, pay = mypay))
    }#getfeatures

    candidate <- getfeatures()
    while (candidate$prob > 1 - mindistance_prob ||
           candidate$prob < mindistance_prob ||
           candidate$pay < mindistance_pay) {
        ##re-sample rnd options with high prob in case you want to put a targ over the top of them later. Any other constraints?
        candidate <- getfeatures()
    }
    
    return(candidate)
}


get_eqvalue <- function(targpoint) {
    exclusion_zone_width <- .2 #minimum targ-comp dist on prob feature.
    myprob <- runif(1, 0, 1)
                                        #    if(!exists(targpoint)){browser()}
    
    while (abs(myprob - targpoint$prob) < exclusion_zone_width) {
        myprob <- runif(1, 0, 1)
    }

    targvalue <- targpoint$prob * targpoint$pay

    mypay <- targvalue / myprob

    return(
        list(prob = myprob, pay = mypay)
    )
}

get_nearby <- function(targpoint, deltasign) {
    ##Hmm. maybe more responsibility for decoy type should be in designdf?
    ##Decoy stats are pretty important, this is kinda arbitrary?
    feature <- sample(c("prob", "pay"), 1)
    delta <- if (feature == "prob") {
                 deltasign * runif(1, 0.05, 0.1)
             }else{
                 deltasign * runif(1, 3, 5)
             }

    targpoint[[feature]] <- targpoint[[feature]] + delta

    ## if (targpoint$prob <= 0 ||
    ##    targpoint$prob > 1 ||
    ##    targpoint$pay <= 0) {
    ##     stop(paste("impossible get nearby:", paste(targpoint, collapse = "|"),
    ##                feature, delta))
    ## } #sometimes the fix involves shifting the original point.
    ##Maybe just let impossible things through here, and redo bad stim via rejection sampling?
    return(targpoint)
}

append_stim <- function(designdf, startrow, endrow = nrow(designdf)) {
    
    for (arow in startrow:endrow) {

            if (designdf[arow,"design_last_role"] != "novel") {
                seed <- list(prob = designdf[arow - 1,
                                             paste0(designdf[arow,"design_last_role"], "_prob")],
                             pay = designdf[arow - 1,
                                            paste0(designdf[arow,"design_last_role"], "_pay")]
                             )

            }else{
                if (designdf[arow, "design_item_consistent"]) {
                    seed <- rndoption(designdf[arow, "design_item_type"])
                }else{
                    seed <- rndoption(fliptype(designdf[arow, "design_item_type"]))
                }
            }

            if (!designdf[arow,"design_current_role"] %in% c("targ","comp","decoy")) {
                print("dcr not in list")
                print(as.character(designdf[arow,"design_current_role"]))
                }
            
            if (designdf[arow,"design_current_role"] == "targ") {
                mytarg <- seed
                mycomp <- get_eqvalue(seed)
                mydecoy <- get_nearby(mytarg, -1)
            }
            if (designdf[arow, "design_current_role"] == "comp") {
                mytarg <- get_eqvalue(seed)
                mycomp <- seed
                mydecoy <- get_nearby(mytarg, -1)
            }
            if (designdf[arow, "design_current_role"] == "decoy") {
                mydecoy <- seed
                mytarg <- get_nearby(seed, 1)
                mycomp <- get_eqvalue(mytarg)
            }

        designdf[arow, "targ_prob"] <- mytarg$prob
        designdf[arow, "comp_prob"] <- mycomp$prob
        designdf[arow, "decoy_prob"] <- mydecoy$prob
        designdf[arow, "targ_pay"] <- mytarg$pay
        designdf[arow, "comp_pay"] <- mycomp$pay
        designdf[arow, "decoy_pay"] <- mydecoy$pay


        ##gosh, items and itemconsistent are messed up.
        ##you might have to change what the design part says. Whatevs. Ugh.

        
        ##First, set a default:
        ##feature-consistent items, tickets are low prob, urns are high.
        for (whichone in c("targ","comp","decoy")){
            if (designdf[arow, paste0(whichone,"_prob")] < 0.5) {
                designdf[arow, paste0(whichone, "_item")] <- "ticket"
            }else{
                designdf[arow, paste0(whichone, "_item")] <- "urn"
            }
        }
        
        ##If you're a 'new' item and focal, read off design sheet
        designdf[arow,
                 paste0(designdf[arow, "design_current_role"], "_item")] <-
            as.character(designdf[arow, "design_item_type"])
        
        ##But override that if you're an 'old' item, keep your item from before.
        ##If you do that, overwrite design_item_type.

        if (designdf[arow, "design_last_role"] != "novel") {
            designdf[arow,
                     paste0(designdf[arow, "design_last_role"], "_item")] <-
                as.character(designdf[arow - 1, "design_item_type"])

            designdf[arow, "design_item_type"] <- #init was rnd, hacky cleanup.
                as.character(designdf[arow - 1, "design_item_type"])
        }
    }
    return(designdf[startrow:endrow, ])
}

add_calc_properties <- function(stimset){
    stimset %>% mutate(
                    targ_value = targ_prob * targ_pay,
                    comp_value = comp_prob * comp_pay,
                    decoy_value = decoy_prob * decoy_pay
                )
    ##maybe more derived properties that could be useful here?
}

##MAIN
reps <- 10
stimset <- data.frame()

for (rep in 1:reps) {
    stimset <- rbind(stimset, defunkify(append_stim(design_template(), 1)))
}

##Ok I messed up bg. Fix here easier than redo. Horrible code stench, sorry
for (i in 1:nrow(stimset)) {
    if (sum(stimset[i,
                    c("targ_item", "comp_item", "decoy_item")] == "urn") >= 2) {
        stimset[i, "design_bg_type"] <- "urn"
    } else {
        stimset[i, "design_bg_type"] <- "ticket"
    }
}
stimset <- stimset %>% select(-design_bg_consistent) #UGH.


##bg and itemtype are being held in reserve for v2!
##switch them off for v1.
if (!decoration_on) {
    defaultitem <- "urn"

    stimset$design_item_type <- "null"

    stimset$targ_item <- defaultitem
    stimset$comp_item <- defaultitem
    stimset$decoy_item <- defaultitem

    stimset$design_bg_type <- defaultitem
}

##OUTPUT: two different arrangements for convenient sanity-checking:
stim_bytrial <- add_calc_properties(stimset)

stim_byfeature <- with(stimset,
                       data.frame(
                           prob = c(targ_prob, comp_prob, decoy_prob),
                           pay = c(targ_pay, comp_pay, decoy_pay),
                           role = rep(c("targ", "comp", "decoy"),
                                 each = nrow(stimset)),
                           item = c(targ_item, comp_item, decoy_item),
                           bg_type = design_bg_type,
                           trialnumber = rep(1:nrow(stimset), 3)
                       )
                       )%>% mutate(value = prob * pay)

## with(bob, table(paste0(last_role, current_role)))
