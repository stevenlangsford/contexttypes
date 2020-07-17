"things to sanity check: That tickets/urns/bgs have the feature distributions you want, with similar expected values."

## stimdist <- data.frame(
##     ticket_pay = map(tix, function(x){x$pay})%>%as.numeric,
##     ticket_prob = map(tix, function(x){x$prob})%>%as.numeric,
##     urn_pay = map(urns, function(x){x$pay})%>%as.numeric,
##     urn_prob = map(urns, function(x){x$prob})%>%as.numeric
## )%>% mutate(ticket_value = ticket_prob * ticket_pay,
##             urn_value = urn_prob * urn_pay)

## ggplot(stimdist) + geom_density(aes(x = ticket_pay)) +
##     ggplot(stimdist) +  geom_density(aes(x = ticket_prob)) +
##     ggplot(stimdist) +  geom_density(aes(x = ticket_value)) 
    
## ggplot(stimdist) + geom_density(aes(x = urn_pay)) +
##     ggplot(stimdist) +  geom_density(aes(x = urn_prob)) +
##     ggplot(stimdist) +  geom_density(aes(x = urn_value)) 
    

## with(stimdist, mean(urn_value)) 
## with(stimdist, mean(ticket_value))

viewstim <- function(stimset, arow) {
    pointsize <- 5
    myplot <- ggplot(stimset[arow, ]) +
        geom_point(aes(x = targ_prob, y = targ_pay, color = "targ"),
                   size = pointsize) +
        geom_point(aes(x = comp_prob, y = comp_pay, color = "comp"),
                   size = pointsize) +
        geom_point(aes(x = decoy_prob, y = decoy_pay, color = "decoy"),
                   size = pointsize) +
        xlim(c(0, 1)) + ylim(c(0, 100)) +
        xlab("prob") + ylab("pay")
    return(myplot)
}

## for (i in 1:20) {
## x11(); print(viewstim(stimset, i));
## }


(ggplot(stim_bytrial, aes(x = targ_value)) + geom_histogram() + ggtitle("Targ value")+

ggplot(stim_bytrial, aes(x = targ_pay)) + geom_histogram() + ggtitle("Targ pay") +

ggplot(stim_bytrial, aes(x = targ_prob)) + geom_histogram() + ggtitle("Targ prob"))/
(ggplot(stim_bytrial, aes(x = comp_value)) + geom_histogram() + ggtitle("Comp value")+

ggplot(stim_bytrial, aes(x = comp_pay)) + geom_histogram() + ggtitle("Comp pay") +

ggplot(stim_bytrial, aes(x = comp_prob)) + geom_histogram() + ggtitle("Comp prob"))    /
    (ggplot(stim_bytrial, aes(x = decoy_value)) + geom_histogram() + ggtitle("Decoy value") +

ggplot(stim_bytrial, aes(x = decoy_pay)) + geom_histogram() + ggtitle("Decoy pay") +

ggplot(stim_bytrial, aes(x = decoy_prob)) + geom_histogram() + ggtitle("Decoy prob"))


(ggplot(stim_bytrial, aes(x = targ_value - comp_value)) + geom_histogram() +
    ggtitle("Targ-comp value difference") +
ggplot(stim_bytrial, aes(x = targ_prob - comp_prob)) + geom_histogram() +
    ggtitle("Targ-comp prob difference") +
    ggplot(stim_bytrial, aes(x = targ_pay - comp_pay)) + geom_histogram(binsize = 1) +
ggtitle("Targ-comp pay difference") +
    ggplot(stim_bytrial, aes(x = targ_pay - comp_pay)) + geom_histogram(binsize = 1) +
ggtitle("Targ-comp pay zoom-in") + xlim(c(-5, 5))
)

(ggplot(stim_bytrial, aes(x=targ_value - decoy_value)) + geom_histogram() +
    ggtitle("Targ-decoy value difference") +
ggplot(stim_bytrial, aes(x=targ_prob - decoy_prob)) + geom_histogram() +
    ggtitle("Targ-decoy prob difference") +
    ggplot(stim_bytrial, aes(x=targ_pay - decoy_pay)) + geom_histogram(binsize = 1) +
    ggtitle("Targ-decoy pay difference"))


ggplot(stim_byfeature, aes(x = prob, fill=role)) +
    geom_histogram(position = "identity", alpha = .3) +
    ggtitle("prob by role") +
ggplot(stim_byfeature, aes(x = pay, fill=role)) +
    geom_histogram(position = "identity", alpha = .3) +
    ggtitle("payoff by role")


(ggplot(stim_byfeature, aes(x = prob, fill=item)) +
 geom_histogram(position = "identity", alpha = .3) +
 ggtitle("prob by item") + guides(fill = FALSE) +
 ggplot(stim_byfeature, aes(x = pay, fill=item)) +
 geom_histogram(position = "identity", alpha = .3) +
 ggtitle("payoff by item") + guides(fill = FALSE)) /
    (ggplot(stim_byfeature, aes(x = value, fill=item)) +
     geom_histogram(position = "identity", alpha = .3) +
     ggtitle("value by item"))


(ggplot(stim_byfeature, aes(x = prob, fill=bg_type)) +
 geom_histogram(position = "identity", alpha = .3) +
 ggtitle("prob by bg") + guides(fill = FALSE) +
 ggplot(stim_byfeature, aes(x = pay, fill=bg_type)) +
 geom_histogram(position = "identity", alpha = .3) +
 ggtitle("payoff by bg") + guides(fill = FALSE)) /
    (ggplot(stim_byfeature, aes(x = value, fill=bg_type)) +
     geom_histogram(position = "identity", alpha = .3) +
     ggtitle("value by bg"))



#summary(stim_bytrial)
