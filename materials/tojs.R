##js template
## new makeTrial(
##     targ = new makeOption(prob=.1, pay=10, role="targ", itemtype="urn"),
##     comp = new makeOption(prob=.2, pay=20, role="comp", itemtype="ticket"),
##     decoy = new makeOption(prob=.3, pay=30, role="decoy", itemtype="urn"),
##     bg = "urn",
##     shuffle([0,1,2]))


myfile <- "stim.js"

write(paste0(
    "trialindex = shuffle([",
    paste(which(stim_bytrial$design_last_role == "novel")-1, collapse=","),#-1 to convert to js 0-indexing
    "])[0];"), myfile)


n_decimals <- 2 #round to 2 decimal places everywhere (not sigfigs)
write("trials = [", myfile, append = TRUE)

for (i in 1:nrow(stim_bytrial)) {
write(
with(stim_bytrial[i, ],
paste0("new makeTrial(targ = new makeOption(prob=",round(targ_prob, n_decimals), ",pay=",round(targ_pay,n_decimals),",role=\"targ\", itemtype=\"",targ_item,"\"),comp = new makeOption(prob=",round(comp_prob,n_decimals),", pay=",round(comp_pay,n_decimals),", role=\"comp\", itemtype=\"",comp_item,"\"),decoy = new makeOption(prob=",round(decoy_prob,n_decimals),", pay=",round(decoy_pay,n_decimals),", role=\"decoy\", itemtype=\"",decoy_item,"\"), bg = \"",design_bg_type,"\",shuffle([0,1,2]))")
),
myfile, append = TRUE
)
if (i < nrow(stim_bytrial)) write(",", myfile, append=TRUE)
}

write("]", myfile, append = TRUE)
