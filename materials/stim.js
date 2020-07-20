trialindex = shuffle([0,1,5,6,7,10,13,14,18,19,20,21,23,25,26,28,29,30,31,32,33,35,40,41,42,43,44,50,54,55,57,62,65,66,69,71,72,74,76,77,78,79,80,81,82,84,87,88,89,91,92,96,97,99,100,103,105,107,108,111,115,118,119,120,122,123,125,126,129,131,134,136,144,145,147,148,150,151,153,155,156,157,159,161,162,163,166,167,168,172,174,178,183,186,188,189,190,191,192,196,197,198,200,201,202,203,204,208,216,217,218,220,221,222,223,226,229,230,235,237,238,239,241,243,244,245,247,250,251,255,257,259,260,261,263,264,266,267,269,271,274,275,276,279,288,289,291,292,294,299,300,302,308,309,310,316,317,318,319,320,322,323,326,327,328,329,330,332,334,337,338,340,341,343,344,345,346,348,350,351,360,361,362,363,364,365,372,373,374,375,376,378,382,384,389,392,393,394,395,396,397,398,399,406,407,411,413,415,416,418,420,422,423,425,426,427,432,433,435,439,440,442,444,453,456,459,462,463,465,468,469,470,471,472,473,474,476,478,479,483,485,486,487,488,492,493,495,496,498,499,500,502,504,506,508,512,514,515,518,521,522,525,527,528,532,533,535,538,539,540,543,546,548,549,552,556,557,558,559,560,561,562,563,565,566,567,569,572,576,577,578,579,580,582,587,589,594,595,596,598,600,601,603,604,608,609,613,614,616,617,618,619,622,623,626,627,629,635,636,637,639,644,645,647,648,649,650,651,652,653,654,655,658,660,661,662,664,665,666,669,671,676,678,681,683,685,686,689,694,697,698,699,704,705,708,709,711,712,714,717])[0];
trials = [
new makeTrial(targ = new makeOption(prob=0.56,pay=10.32,role="targ", itemtype="urn"),comp = new makeOption(prob=0.77, pay=7.49, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.47, pay=10.32, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.97,pay=2.86,role="targ", itemtype="urn"),comp = new makeOption(prob=0.63, pay=4.41, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.9, pay=2.86, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.72,pay=3.87,role="targ", itemtype="urn"),comp = new makeOption(prob=0.97, pay=2.86, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.72, pay=0.33, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.1,pay=2.44,role="targ", itemtype="urn"),comp = new makeOption(prob=0.72, pay=0.33, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.03, pay=2.44, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.17,pay=1.38,role="targ", itemtype="urn"),comp = new makeOption(prob=0.72, pay=0.33, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.1, pay=1.38, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.6,pay=10.76,role="targ", itemtype="urn"),comp = new makeOption(prob=0.94, pay=6.81, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.6, pay=6.09, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.57,pay=12.85,role="targ", itemtype="urn"),comp = new makeOption(prob=0.2, pay=37.2, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.57, pay=8.41, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.27,pay=14.14,role="targ", itemtype="urn"),comp = new makeOption(prob=0.84, pay=4.56, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.27, pay=10.99, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.27,pay=17.27,role="targ", itemtype="urn"),comp = new makeOption(prob=0.53, pay=8.71, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.27, pay=14.14, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.27,pay=14.14,role="targ", itemtype="urn"),comp = new makeOption(prob=0.51, pay=7.51, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.27, pay=10.71, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.15,pay=12.52,role="targ", itemtype="urn"),comp = new makeOption(prob=0.37, pay=5.25, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.08, pay=12.52, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.37,pay=5.25,role="targ", itemtype="urn"),comp = new makeOption(prob=0.7, pay=2.75, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.37, pay=1.44, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.47,pay=1.44,role="targ", itemtype="urn"),comp = new makeOption(prob=0.13, pay=5.33, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.37, pay=1.44, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.65,pay=4.48,role="targ", itemtype="urn"),comp = new makeOption(prob=0.43, pay=6.81, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.6, pay=4.48, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.31,pay=12.36,role="targ", itemtype="urn"),comp = new makeOption(prob=0.6, pay=6.32, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.31, pay=8.5, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.37,pay=12.36,role="targ", itemtype="urn"),comp = new makeOption(prob=0.93, pay=4.91, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.31, pay=12.36, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.93,pay=9.29,role="targ", itemtype="urn"),comp = new makeOption(prob=0.61, pay=14.29, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.93, pay=4.91, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.93,pay=8.14,role="targ", itemtype="urn"),comp = new makeOption(prob=0.71, pay=10.73, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.93, pay=4.91, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.48,pay=10.36,role="targ", itemtype="urn"),comp = new makeOption(prob=0.82, pay=6.06, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.48, pay=6.63, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.84,pay=4.18,role="targ", itemtype="urn"),comp = new makeOption(prob=0.19, pay=18.78, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.77, pay=4.18, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.1,pay=21.04,role="targ", itemtype="urn"),comp = new makeOption(prob=0.48, pay=4.36, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.1, pay=16.92, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.48,pay=14.26,role="targ", itemtype="urn"),comp = new makeOption(prob=0.9, pay=7.62, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.48, pay=10.99, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.67,pay=10.22,role="targ", itemtype="urn"),comp = new makeOption(prob=0.9, pay=7.62, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.58, pay=10.22, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.56,pay=3.96,role="targ", itemtype="urn"),comp = new makeOption(prob=0.14, pay=16.28, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.49, pay=3.96, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.34,pay=13.19,role="targ", itemtype="urn"),comp = new makeOption(prob=0.79, pay=5.65, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.34, pay=8.81, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.3,pay=11.45,role="targ", itemtype="urn"),comp = new makeOption(prob=0.7, pay=4.96, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.21, pay=11.45, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.79,pay=5.78,role="targ", itemtype="urn"),comp = new makeOption(prob=0.23, pay=20.03, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.72, pay=5.78, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.23,pay=20.03,role="targ", itemtype="urn"),comp = new makeOption(prob=0.89, pay=5.12, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.15, pay=20.03, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.72,pay=5.74,role="targ", itemtype="urn"),comp = new makeOption(prob=0.45, pay=9.16, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.63, pay=5.74, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.67,pay=5.7,role="targ", itemtype="urn"),comp = new makeOption(prob=0.36, pay=10.66, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.62, pay=5.7, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.33,pay=22.08,role="targ", itemtype="urn"),comp = new makeOption(prob=0.63, pay=11.72, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.25, pay=22.08, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.25,pay=9.88,role="targ", itemtype="urn"),comp = new makeOption(prob=0.8, pay=3.09, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.17, pay=9.88, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.46,pay=15.14,role="targ", itemtype="urn"),comp = new makeOption(prob=0.77, pay=9.06, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.41, pay=15.14, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.55,pay=3.9,role="targ", itemtype="urn"),comp = new makeOption(prob=0.12, pay=17.23, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.48, pay=3.9, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.1,pay=19.29,role="targ", itemtype="urn"),comp = new makeOption(prob=0.48, pay=3.9, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.1, pay=15.81, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.27,pay=17.55,role="targ", itemtype="urn"),comp = new makeOption(prob=0.79, pay=5.96, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.18, pay=17.55, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.23,pay=20.3,role="targ", itemtype="urn"),comp = new makeOption(prob=0.79, pay=5.96, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.18, pay=20.3, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.23,pay=20.3,role="targ", itemtype="urn"),comp = new makeOption(prob=0.72, pay=6.6, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.23, pay=15.48, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.23,pay=24.55,role="targ", itemtype="urn"),comp = new makeOption(prob=0.78, pay=7.32, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.23, pay=20.3, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.23,pay=20.3,role="targ", itemtype="urn"),comp = new makeOption(prob=0.55, pay=8.55, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.23, pay=17.26, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.1,pay=13.17,role="targ", itemtype="urn"),comp = new makeOption(prob=0.48, pay=2.81, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.1, pay=9.12, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.38,pay=15.49,role="targ", itemtype="urn"),comp = new makeOption(prob=0.6, pay=9.63, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.28, pay=15.49, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.52,pay=10.47,role="targ", itemtype="urn"),comp = new makeOption(prob=0.86, pay=6.27, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.52, pay=7.41, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.87,pay=7.19,role="targ", itemtype="urn"),comp = new makeOption(prob=0.64, pay=9.78, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.78, pay=7.19, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.2,pay=21.87,role="targ", itemtype="urn"),comp = new makeOption(prob=0.62, pay=7.25, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.12, pay=21.87, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.2,pay=21.87,role="targ", itemtype="urn"),comp = new makeOption(prob=0.88, pay=5.07, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.2, pay=17, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.97,pay=5.07,role="targ", itemtype="urn"),comp = new makeOption(prob=0.26, pay=18.63, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.88, pay=5.07, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.26,pay=23.27,role="targ", itemtype="urn"),comp = new makeOption(prob=0.95, pay=6.45, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.26, pay=18.63, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.26,pay=22.77,role="targ", itemtype="urn"),comp = new makeOption(prob=0.72, pay=8.34, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.26, pay=18.63, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.26,pay=25.98,role="targ", itemtype="urn"),comp = new makeOption(prob=0.47, pay=14.37, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.26, pay=22.77, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.54,pay=22.11,role="targ", itemtype="urn"),comp = new makeOption(prob=0.28, pay=42.38, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.47, pay=22.11, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.28,pay=42.38,role="targ", itemtype="urn"),comp = new makeOption(prob=0.88, pay=13.46, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.28, pay=38.6, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.17,pay=71.46,role="targ", itemtype="urn"),comp = new makeOption(prob=0.88, pay=13.46, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.1, pay=71.46, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.49,pay=24.43,role="targ", itemtype="urn"),comp = new makeOption(prob=0.17, pay=71.46, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.49, pay=19.86, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.19,pay=20.97,role="targ", itemtype="urn"),comp = new makeOption(prob=0.63, pay=6.38, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.14, pay=20.97, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.26,pay=9.99,role="targ", itemtype="urn"),comp = new makeOption(prob=0.84, pay=3.06, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.2, pay=9.99, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.26,pay=9.99,role="targ", itemtype="urn"),comp = new makeOption(prob=0.62, pay=4.12, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.21, pay=9.99, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.9,pay=9.11,role="targ", itemtype="urn"),comp = new makeOption(prob=0.69, pay=11.87, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.84, pay=9.11, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.76,pay=11.87,role="targ", itemtype="urn"),comp = new makeOption(prob=0.46, pay=19.69, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.69, pay=11.87, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.76,pay=11.87,role="targ", itemtype="urn"),comp = new makeOption(prob=0.2, pay=45.1, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.68, pay=11.87, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.43,pay=21.32,role="targ", itemtype="urn"),comp = new makeOption(prob=0.76, pay=11.87, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.36, pay=21.32, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.36,pay=21.32,role="targ", itemtype="urn"),comp = new makeOption(prob=0.72, pay=10.61, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.28, pay=21.32, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.73,pay=8.94,role="targ", itemtype="urn"),comp = new makeOption(prob=0.48, pay=13.6, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.73, pay=5.55, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.73,pay=5.55,role="targ", itemtype="urn"),comp = new makeOption(prob=0.51, pay=7.89, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.63, pay=5.55, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.09,pay=39.08,role="targ", itemtype="urn"),comp = new makeOption(prob=0.63, pay=5.55, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.02, pay=39.08, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.5,pay=6.65,role="targ", itemtype="urn"),comp = new makeOption(prob=0.89, pay=3.76, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.45, pay=6.65, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.3,pay=7.02,role="targ", itemtype="urn"),comp = new makeOption(prob=0.58, pay=3.61, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.23, pay=7.02, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.23,pay=10.26,role="targ", itemtype="urn"),comp = new makeOption(prob=0.81, pay=2.96, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.23, pay=7.02, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.58,pay=4.14,role="targ", itemtype="urn"),comp = new makeOption(prob=0.23, pay=10.26, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.49, pay=4.14, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.89,pay=11.48,role="targ", itemtype="urn"),comp = new makeOption(prob=0.41, pay=25.07, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.89, pay=6.89, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.09,pay=67.26,role="targ", itemtype="urn"),comp = new makeOption(prob=0.89, pay=6.89, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.02, pay=67.26, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.16,pay=16.44,role="targ", itemtype="urn"),comp = new makeOption(prob=0.76, pay=3.41, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.16, pay=11.86, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.13,pay=8.96,role="targ", itemtype="urn"),comp = new makeOption(prob=0.45, pay=2.67, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.13, pay=4.88, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.55,pay=2.2,role="targ", itemtype="urn"),comp = new makeOption(prob=0.13, pay=8.96, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.47, pay=2.2, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.14,pay=17.06,role="targ", itemtype="urn"),comp = new makeOption(prob=0.48, pay=4.95, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.04, pay=17.06, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.1,pay=22.86,role="targ", itemtype="urn"),comp = new makeOption(prob=0.48, pay=4.95, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.1, pay=19.22, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.3,pay=8.04,role="targ", itemtype="urn"),comp = new makeOption(prob=0.67, pay=3.64, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.24, pay=8.04, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.85,pay=11.32,role="targ", itemtype="urn"),comp = new makeOption(prob=0.53, pay=18.23, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.8, pay=11.32, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.11,pay=17.01,role="targ", itemtype="urn"),comp = new makeOption(prob=0.82, pay=2.31, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.03, pay=17.01, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.87,pay=5.75,role="targ", itemtype="urn"),comp = new makeOption(prob=0.06, pay=90.29, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.81, pay=5.75, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.35,pay=9.34,role="targ", itemtype="urn"),comp = new makeOption(prob=0.68, pay=4.88, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.26, pay=9.34, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.08,pay=79.49,role="targ", itemtype="urn"),comp = new makeOption(prob=0.33, pay=19.93, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.08, pay=75.35, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.11,pay=18.07,role="targ", itemtype="urn"),comp = new makeOption(prob=0.57, pay=3.32, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.11, pay=14.86, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.11,pay=21.25,role="targ", itemtype="urn"),comp = new makeOption(prob=0.59, pay=3.76, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.11, pay=18.07, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.88,pay=3.71,role="targ", itemtype="urn"),comp = new makeOption(prob=0.19, pay=17.58, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.82, pay=3.71, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.88,pay=3.71,role="targ", itemtype="urn"),comp = new makeOption(prob=0.52, pay=6.28, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.81, pay=3.71, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.97,pay=3.71,role="targ", itemtype="urn"),comp = new makeOption(prob=0.05, pay=74.24, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.88, pay=3.71, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.47,pay=7.05,role="targ", itemtype="urn"),comp = new makeOption(prob=0.14, pay=23.16, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.47, pay=2.25, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.48,pay=4.13,role="targ", itemtype="urn"),comp = new makeOption(prob=0.18, pay=10.74, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.41, pay=4.13, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.09,pay=94.43,role="targ", itemtype="urn"),comp = new makeOption(prob=0.9, pay=9.93, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.03, pay=94.43, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.9,pay=9.93,role="targ", itemtype="urn"),comp = new makeOption(prob=0.28, pay=31.76, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.9, pay=6.77, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.14,pay=18.04,role="targ", itemtype="urn"),comp = new makeOption(prob=0.81, pay=3.19, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.14, pay=13.35, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.14,pay=23.12,role="targ", itemtype="urn"),comp = new makeOption(prob=0.89, pay=3.56, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.14, pay=19.45, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.89,pay=6.91,role="targ", itemtype="urn"),comp = new makeOption(prob=0.2, pay=31.4, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.89, pay=3.56, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.89,pay=3.56,role="targ", itemtype="urn"),comp = new makeOption(prob=0.37, pay=8.61, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.84, pay=3.56, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.91,pay=3.56,role="targ", itemtype="urn"),comp = new makeOption(prob=0.54, pay=6.03, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.84, pay=3.56, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.79,pay=5.11,role="targ", itemtype="urn"),comp = new makeOption(prob=0.31, pay=13.11, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.71, pay=5.11, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.87,pay=6.66,role="targ", itemtype="urn"),comp = new makeOption(prob=0.53, pay=10.83, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.87, pay=3.18, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.62,pay=10.83,role="targ", itemtype="urn"),comp = new makeOption(prob=0.91, pay=7.37, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.53, pay=10.83, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.64,pay=8.58,role="targ", itemtype="urn"),comp = new makeOption(prob=0.92, pay=5.99, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.58, pay=8.58, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.92,pay=3.72,role="targ", itemtype="urn"),comp = new makeOption(prob=0.14, pay=25.11, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.83, pay=3.72, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.83,pay=3.72,role="targ", itemtype="urn"),comp = new makeOption(prob=0.26, pay=12.02, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.77, pay=3.72, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.56,pay=5.52,role="targ", itemtype="urn"),comp = new makeOption(prob=0.28, pay=10.98, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.56, pay=1.94, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.16,pay=28.91,role="targ", itemtype="urn"),comp = new makeOption(prob=0.86, pay=5.35, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.1, pay=28.91, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.86,pay=5.34,role="targ", itemtype="urn"),comp = new makeOption(prob=0.16, pay=28.91, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.86, pay=1.83, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.85,pay=9.28,role="targ", itemtype="urn"),comp = new makeOption(prob=0.24, pay=33.39, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.78, pay=9.28, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.78,pay=13.15,role="targ", itemtype="urn"),comp = new makeOption(prob=0.49, pay=20.81, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.78, pay=9.28, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.5,pay=25.59,role="targ", itemtype="urn"),comp = new makeOption(prob=0.77, pay=16.56, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.5, pay=20.61, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.12,pay=26.01,role="targ", itemtype="urn"),comp = new makeOption(prob=0.89, pay=3.4, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.07, pay=26.01, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.14,pay=26.01,role="targ", itemtype="urn"),comp = new makeOption(prob=0.44, pay=8.54, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.07, pay=26.01, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.44,pay=8.54,role="targ", itemtype="urn"),comp = new makeOption(prob=0.73, pay=5.15, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.39, pay=8.54, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.71,pay=10.53,role="targ", itemtype="urn"),comp = new makeOption(prob=0.16, pay=45.57, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.71, pay=7.19, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.16,pay=45.57,role="targ", itemtype="urn"),comp = new makeOption(prob=0.47, pay=15.86, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.1, pay=45.57, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.47,pay=19.8,role="targ", itemtype="urn"),comp = new makeOption(prob=0.2, pay=47.35, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.47, pay=15.86, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.47,pay=15.86,role="targ", itemtype="urn"),comp = new makeOption(prob=0.89, pay=8.41, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.47, pay=12.25, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.56,pay=9.83,role="targ", itemtype="urn"),comp = new makeOption(prob=0.89, pay=6.2, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.47, pay=9.83, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.38,pay=14.58,role="targ", itemtype="urn"),comp = new makeOption(prob=0.89, pay=6.2, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.38, pay=10.62, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.6,pay=9.23,role="targ", itemtype="urn"),comp = new makeOption(prob=0.89, pay=6.2, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.52, pay=9.23, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.71,pay=10.06,role="targ", itemtype="urn"),comp = new makeOption(prob=0.09, pay=81.79, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.71, pay=5.72, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.54,pay=6.77,role="targ", itemtype="urn"),comp = new makeOption(prob=0.82, pay=4.46, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.46, pay=6.77, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.86,pay=8.99,role="targ", itemtype="urn"),comp = new makeOption(prob=0.31, pay=24.88, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.86, pay=4.69, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.96,pay=8.99,role="targ", itemtype="urn"),comp = new makeOption(prob=0.76, pay=11.44, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.86, pay=8.99, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.56,pay=5.84,role="targ", itemtype="urn"),comp = new makeOption(prob=0.81, pay=4.07, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.49, pay=5.84, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.9,pay=3.83,role="targ", itemtype="urn"),comp = new makeOption(prob=0.08, pay=42.76, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.8, pay=3.83, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.8,pay=3.83,role="targ", itemtype="urn"),comp = new makeOption(prob=0.4, pay=7.63, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.74, pay=3.83, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.67,pay=4.26,role="targ", itemtype="urn"),comp = new makeOption(prob=0.21, pay=13.73, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.62, pay=4.26, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.89,pay=11.08,role="targ", itemtype="urn"),comp = new makeOption(prob=0.4, pay=24.48, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.89, pay=7.86, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.89,pay=11.62,role="targ", itemtype="urn"),comp = new makeOption(prob=0.35, pay=29.68, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.89, pay=7.86, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.54,pay=12.84,role="targ", itemtype="urn"),comp = new makeOption(prob=0.89, pay=7.86, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.54, pay=8.32, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.63,pay=5.61,role="targ", itemtype="urn"),comp = new makeOption(prob=0.23, pay=15.7, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.63, pay=2.2, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.63,pay=5.61,role="targ", itemtype="urn"),comp = new makeOption(prob=0.23, pay=15.2, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.63, pay=1.23, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.25,pay=17.71,role="targ", itemtype="urn"),comp = new makeOption(prob=0.85, pay=5.26, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.16, pay=17.71, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.68,pay=6.53,role="targ", itemtype="urn"),comp = new makeOption(prob=0.25, pay=17.71, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.68, pay=2.99, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.3,pay=17.71,role="targ", itemtype="urn"),comp = new makeOption(prob=0.07, pay=82.02, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.25, pay=17.71, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.17,pay=16.99,role="targ", itemtype="urn"),comp = new makeOption(prob=0.83, pay=3.58, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.1, pay=16.99, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.17,pay=16.99,role="targ", itemtype="urn"),comp = new makeOption(prob=0.59, pay=5.03, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.17, pay=12.33, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.47,pay=5.29,role="targ", itemtype="urn"),comp = new makeOption(prob=0.71, pay=3.56, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.47, pay=1.81, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.53,pay=5.29,role="targ", itemtype="urn"),comp = new makeOption(prob=0.18, pay=15.16, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.47, pay=5.29, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.53,pay=5.29,role="targ", itemtype="urn"),comp = new makeOption(prob=0.16, pay=17.38, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.43, pay=5.29, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.16,pay=17.38,role="targ", itemtype="urn"),comp = new makeOption(prob=0.82, pay=3.41, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.1, pay=17.38, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.8,pay=3.48,role="targ", itemtype="urn"),comp = new makeOption(prob=0.16, pay=17.38, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.8, pay=0.08, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.43,pay=5.85,role="targ", itemtype="urn"),comp = new makeOption(prob=0.89, pay=2.81, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.38, pay=5.85, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.02,pay=89.71,role="targ", itemtype="urn"),comp = new makeOption(prob=0.38, pay=5.85, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.02, pay=85, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.3,pay=7.02,role="targ", itemtype="urn"),comp = new makeOption(prob=0.02, pay=85, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.23, pay=7.02, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.5,pay=4.94,role="targ", itemtype="urn"),comp = new makeOption(prob=0.17, pay=14.37, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.5, pay=1.52, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.14,pay=10.29,role="targ", itemtype="urn"),comp = new makeOption(prob=0.72, pay=2.05, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.14, pay=6.44, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.72,pay=6.36,role="targ", itemtype="urn"),comp = new makeOption(prob=0.12, pay=37.63, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.72, pay=2.05, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.7,pay=8.89,role="targ", itemtype="urn"),comp = new makeOption(prob=0.36, pay=17.1, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.7, pay=5.61, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.24,pay=22.69,role="targ", itemtype="urn"),comp = new makeOption(prob=0.47, pay=11.61, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.24, pay=18.32, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.24,pay=18.32,role="targ", itemtype="urn"),comp = new makeOption(prob=0.77, pay=5.7, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.24, pay=14.13, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.45,pay=9.49,role="targ", itemtype="urn"),comp = new makeOption(prob=0.89, pay=4.82, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.37, pay=9.49, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.35,pay=12.61,role="targ", itemtype="urn"),comp = new makeOption(prob=0.88, pay=4.95, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.35, pay=8.82, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.89,pay=4.93,role="targ", itemtype="urn"),comp = new makeOption(prob=0.35, pay=12.61, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.89, pay=0.1, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.73,pay=9.16,role="targ", itemtype="urn"),comp = new makeOption(prob=0.25, pay=26.63, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.63, pay=9.16, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.26,pay=22.28,role="targ", itemtype="urn"),comp = new makeOption(prob=0.63, pay=9.16, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.26, pay=17.38, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.42,pay=7.16,role="targ", itemtype="urn"),comp = new makeOption(prob=0.77, pay=3.87, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.36, pay=7.16, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.18,pay=23.27,role="targ", itemtype="urn"),comp = new makeOption(prob=0.72, pay=5.81, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.11, pay=23.27, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.26,pay=15.34,role="targ", itemtype="urn"),comp = new makeOption(prob=0.6, pay=6.47, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.26, pay=10.73, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.6,pay=9.82,role="targ", itemtype="urn"),comp = new makeOption(prob=0.13, pay=45.22, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.6, pay=6.47, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.29,pay=12.37,role="targ", itemtype="urn"),comp = new makeOption(prob=0.91, pay=3.97, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.2, pay=12.37, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.48,pay=7.53,role="targ", itemtype="urn"),comp = new makeOption(prob=0.91, pay=3.97, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.4, pay=7.53, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.97,pay=5.69,role="targ", itemtype="urn"),comp = new makeOption(prob=0.36, pay=15.2, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.97, pay=1.67, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.26,pay=12.24,role="targ", itemtype="urn"),comp = new makeOption(prob=0.67, pay=4.73, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.26, pay=7.97, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.39,pay=12.42,role="targ", itemtype="urn"),comp = new makeOption(prob=0.65, pay=7.45, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.34, pay=12.42, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.65,pay=7.54,role="targ", itemtype="urn"),comp = new makeOption(prob=0.39, pay=12.42, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.65, pay=2.68, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.65,pay=7.54,role="targ", itemtype="urn"),comp = new makeOption(prob=0.05, pay=92.43, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.55, pay=7.54, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.71,pay=9.16,role="targ", itemtype="urn"),comp = new makeOption(prob=0.15, pay=42.5, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.64, pay=9.16, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.16,pay=17.82,role="targ", itemtype="urn"),comp = new makeOption(prob=0.64, pay=4.43, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.16, pay=13.95, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.14,pay=11.11,role="targ", itemtype="urn"),comp = new makeOption(prob=0.76, pay=2.02, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.14, pay=7.41, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.14,pay=12.26,role="targ", itemtype="urn"),comp = new makeOption(prob=0.38, pay=4.4, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.14, pay=7.41, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.22,pay=7.41,role="targ", itemtype="urn"),comp = new makeOption(prob=0.86, pay=1.91, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.14, pay=7.41, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.19,pay=7.41,role="targ", itemtype="urn"),comp = new makeOption(prob=0.86, pay=1.65, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.14, pay=7.41, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.83,pay=7.86,role="targ", itemtype="urn"),comp = new makeOption(prob=0.11, pay=61.43, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.83, pay=4, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.11,pay=61.43,role="targ", itemtype="urn"),comp = new makeOption(prob=0.79, pay=8.27, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.11, pay=57.48, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.14,pay=24.42,role="targ", itemtype="urn"),comp = new makeOption(prob=0.47, pay=7.19, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.14, pay=20.29, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.46,pay=7.42,role="targ", itemtype="urn"),comp = new makeOption(prob=0.14, pay=24.42, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.46, pay=3.77, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.46,pay=7.42,role="targ", itemtype="urn"),comp = new makeOption(prob=0.91, pay=3.74, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.39, pay=7.42, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.97,pay=2.63,role="targ", itemtype="urn"),comp = new makeOption(prob=0.29, pay=8.77, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.91, pay=2.63, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.78,pay=6.32,role="targ", itemtype="urn"),comp = new makeOption(prob=0.29, pay=16.83, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.7, pay=6.32, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.32,pay=13.75,role="targ", itemtype="urn"),comp = new makeOption(prob=0.7, pay=6.32, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.32, pay=8.94, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.7,pay=6.32,role="targ", itemtype="urn"),comp = new makeOption(prob=0.48, pay=9.08, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.7, pay=3.22, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.7,pay=10.39,role="targ", itemtype="urn"),comp = new makeOption(prob=0.95, pay=7.62, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.7, pay=6.32, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.48,pay=15.21,role="targ", itemtype="urn"),comp = new makeOption(prob=0.95, pay=7.62, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.39, pay=15.21, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.82,pay=8,role="targ", itemtype="urn"),comp = new makeOption(prob=0.59, pay=11.21, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.82, pay=4.53, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.35,pay=10.69,role="targ", itemtype="urn"),comp = new makeOption(prob=0.82, pay=4.53, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.25, pay=10.69, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.08,pay=48.39,role="targ", itemtype="urn"),comp = new makeOption(prob=0.82, pay=4.53, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.08, pay=43.66, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.75,pay=2.1,role="targ", itemtype="urn"),comp = new makeOption(prob=0.1, pay=15.57, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.68, pay=2.1, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.68,pay=2.1,role="targ", itemtype="urn"),comp = new makeOption(prob=0.03, pay=41.02, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.61, pay=2.1, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.28,pay=6.43,role="targ", itemtype="urn"),comp = new makeOption(prob=0.51, pay=3.57, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.28, pay=1.47, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.33,pay=20.57,role="targ", itemtype="urn"),comp = new makeOption(prob=0.75, pay=9.18, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.33, pay=16.62, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.11,pay=31.69,role="targ", itemtype="urn"),comp = new makeOption(prob=0.84, pay=4, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.01, pay=31.69, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.62,pay=6.52,role="targ", itemtype="urn"),comp = new makeOption(prob=0.94, pay=4.27, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.55, pay=6.52, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.14,pay=56.49,role="targ", itemtype="urn"),comp = new makeOption(prob=0.8, pay=10.2, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.14, pay=52.71, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.8,pay=13.34,role="targ", itemtype="urn"),comp = new makeOption(prob=0.41, pay=25.97, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.8, pay=10.2, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.14,pay=66.2,role="targ", itemtype="urn"),comp = new makeOption(prob=0.88, pay=10.2, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.14, pay=62.56, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.23,pay=66.2,role="targ", itemtype="urn"),comp = new makeOption(prob=0.57, pay=26.36, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.14, pay=66.2, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.54,pay=17.79,role="targ", itemtype="urn"),comp = new makeOption(prob=0.19, pay=49, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.54, pay=14.2, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.91,pay=4.36,role="targ", itemtype="urn"),comp = new makeOption(prob=0.54, pay=7.38, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.81, pay=4.36, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.89,pay=16.77,role="targ", itemtype="urn"),comp = new makeOption(prob=0.65, pay=22.99, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.89, pay=12.93, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.29,pay=51.57,role="targ", itemtype="urn"),comp = new makeOption(prob=0.65, pay=22.99, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.22, pay=51.57, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.25,pay=23.34,role="targ", itemtype="urn"),comp = new makeOption(prob=0.57, pay=10.12, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.15, pay=23.34, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.7,pay=12.25,role="targ", itemtype="urn"),comp = new makeOption(prob=0.96, pay=8.91, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.7, pay=8.99, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.51,pay=3.89,role="targ", itemtype="urn"),comp = new makeOption(prob=0.18, pay=11.23, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.46, pay=3.89, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.17,pay=16.86,role="targ", itemtype="urn"),comp = new makeOption(prob=0.86, pay=3.35, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.17, pay=12.81, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.33,pay=3.71,role="targ", itemtype="urn"),comp = new makeOption(prob=0.11, pay=11.06, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.33, pay=0.13, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.17,pay=11.06,role="targ", itemtype="urn"),comp = new makeOption(prob=0.59, pay=3.26, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.11, pay=11.06, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.17,pay=14.28,role="targ", itemtype="urn"),comp = new makeOption(prob=0.91, pay=2.75, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.17, pay=11.06, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.17,pay=11.06,role="targ", itemtype="urn"),comp = new makeOption(prob=0.63, pay=3.06, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.17, pay=6.1, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.83,pay=4.64,role="targ", itemtype="urn"),comp = new makeOption(prob=0.36, pay=10.7, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.75, pay=4.64, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.75,pay=4.64,role="targ", itemtype="urn"),comp = new makeOption(prob=0.17, pay=20.22, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.68, pay=4.64, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.99,pay=3.22,role="targ", itemtype="urn"),comp = new makeOption(prob=0.68, pay=4.64, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.89, pay=3.22, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.99,pay=3.22,role="targ", itemtype="urn"),comp = new makeOption(prob=0.72, pay=4.38, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.93, pay=3.22, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.99,pay=7.4,role="targ", itemtype="urn"),comp = new makeOption(prob=0.43, pay=17.05, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.99, pay=3.22, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.2,pay=17.49,role="targ", itemtype="urn"),comp = new makeOption(prob=0.84, pay=4.11, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.2, pay=14.34, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.27,pay=14.34,role="targ", itemtype="urn"),comp = new makeOption(prob=0.65, pay=6, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.2, pay=14.34, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.65,pay=6,role="targ", itemtype="urn"),comp = new makeOption(prob=0.11, pay=36.87, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.6, pay=6, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.62,pay=7.72,role="targ", itemtype="urn"),comp = new makeOption(prob=0.2, pay=23.49, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.62, pay=3.84, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.14,pay=23.99,role="targ", itemtype="urn"),comp = new makeOption(prob=0.76, pay=4.47, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.06, pay=23.99, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.83,pay=4.48,role="targ", itemtype="urn"),comp = new makeOption(prob=0.07, pay=50.61, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.83, pay=1, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.83,pay=1,role="targ", itemtype="urn"),comp = new makeOption(prob=0.12, pay=7.15, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.73, pay=1, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.39,pay=2.05,role="targ", itemtype="urn"),comp = new makeOption(prob=0.12, pay=6.82, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.32, pay=2.05, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.72,pay=7.11,role="targ", itemtype="urn"),comp = new makeOption(prob=0.36, pay=13.98, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.72, pay=3.89, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.49,pay=4.44,role="targ", itemtype="urn"),comp = new makeOption(prob=0.15, pay=14.56, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.49, pay=1.2, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.11,pay=17.48,role="targ", itemtype="urn"),comp = new makeOption(prob=0.64, pay=2.95, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.11, pay=12.89, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.33,pay=5.68,role="targ", itemtype="urn"),comp = new makeOption(prob=0.11, pay=17.48, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.26, pay=5.68, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.26,pay=5.68,role="targ", itemtype="urn"),comp = new makeOption(prob=0.5, pay=2.99, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.26, pay=2.19, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.43,pay=3.91,role="targ", itemtype="urn"),comp = new makeOption(prob=0.11, pay=14.98, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.43, pay=0.36, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.09,pay=1.69,role="targ", itemtype="urn"),comp = new makeOption(prob=0.43, pay=0.36, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.01, pay=1.69, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.09,pay=1.61,role="targ", itemtype="urn"),comp = new makeOption(prob=0.43, pay=0.36, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.01, pay=1.61, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.13,pay=23.09,role="targ", itemtype="urn"),comp = new makeOption(prob=0.4, pay=7.6, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.13, pay=18.94, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.73,pay=5.03,role="targ", itemtype="urn"),comp = new makeOption(prob=0.96, pay=3.85, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.73, pay=1.98, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.62,pay=5.26,role="targ", itemtype="urn"),comp = new makeOption(prob=0.88, pay=3.72, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.62, pay=1.93, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.62,pay=5.26,role="targ", itemtype="urn"),comp = new makeOption(prob=0.25, pay=12.92, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.57, pay=5.26, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.62,pay=5.26,role="targ", itemtype="urn"),comp = new makeOption(prob=0.24, pay=13.38, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.62, pay=1.03, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.62,pay=1.03,role="targ", itemtype="urn"),comp = new makeOption(prob=0.17, pay=3.77, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.55, pay=1.03, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.87,pay=2.63,role="targ", itemtype="urn"),comp = new makeOption(prob=0.12, pay=18.61, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.8, pay=2.63, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.12,pay=18.61,role="targ", itemtype="urn"),comp = new makeOption(prob=0.85, pay=2.69, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.12, pay=14.65, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.71,pay=2.32,role="targ", itemtype="urn"),comp = new makeOption(prob=0.18, pay=9.21, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.61, pay=2.32, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.77,pay=3.33,role="targ", itemtype="urn"),comp = new makeOption(prob=0.22, pay=11.46, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.71, pay=3.33, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.12,pay=16.55,role="targ", itemtype="urn"),comp = new makeOption(prob=0.41, pay=4.86, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.05, pay=16.55, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.05,pay=20.6,role="targ", itemtype="urn"),comp = new makeOption(prob=0.98, pay=0.99, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.05, pay=16.55, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.17,pay=22.09,role="targ", itemtype="urn"),comp = new makeOption(prob=0.82, pay=4.55, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.17, pay=17.91, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.17,pay=26.88,role="targ", itemtype="urn"),comp = new makeOption(prob=0.56, pay=8.13, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.17, pay=22.09, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.37,pay=13.32,role="targ", itemtype="urn"),comp = new makeOption(prob=0.69, pay=7.14, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.31, pay=13.32, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.8,pay=4.82,role="targ", itemtype="urn"),comp = new makeOption(prob=0.05, pay=84.58, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.7, pay=4.82, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.74,pay=2.55,role="targ", itemtype="urn"),comp = new makeOption(prob=0.15, pay=12.55, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.67, pay=2.55, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.67,pay=6.2,role="targ", itemtype="urn"),comp = new makeOption(prob=0.9, pay=4.6, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.67, pay=2.55, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.19,pay=13.95,role="targ", itemtype="urn"),comp = new makeOption(prob=0.73, pay=3.59, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.11, pay=13.95, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.73,pay=7.7,role="targ", itemtype="urn"),comp = new makeOption(prob=0.43, pay=13.04, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.73, pay=3.59, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.43,pay=13.04,role="targ", itemtype="urn"),comp = new makeOption(prob=0.96, pay=5.87, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.43, pay=9.31, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.9,pay=8.03,role="targ", itemtype="urn"),comp = new makeOption(prob=0.07, pay=98.39, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.9, pay=4.01, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.67,pay=7.04,role="targ", itemtype="urn"),comp = new makeOption(prob=0.23, pay=20.4, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.67, pay=2.37, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.67,pay=7.04,role="targ", itemtype="urn"),comp = new makeOption(prob=0.12, pay=37.93, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.6, pay=7.04, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.73,pay=7.04,role="targ", itemtype="urn"),comp = new makeOption(prob=0.33, pay=15.72, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.67, pay=7.04, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.25,pay=18.92,role="targ", itemtype="urn"),comp = new makeOption(prob=0.67, pay=7.04, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.25, pay=14.71, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.45,pay=9.38,role="targ", itemtype="urn"),comp = new makeOption(prob=0.16, pay=26.21, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.45, pay=5.47, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.79,pay=5.33,role="targ", itemtype="urn"),comp = new makeOption(prob=0.16, pay=26.21, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.79, pay=2.11, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.86,pay=4.25,role="targ", itemtype="urn"),comp = new makeOption(prob=0.61, pay=6, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.81, pay=4.25, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.81,pay=4.25,role="targ", itemtype="urn"),comp = new makeOption(prob=0.28, pay=12.43, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.73, pay=4.25, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.15,pay=12.04,role="targ", itemtype="urn"),comp = new makeOption(prob=0.67, pay=2.69, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.05, pay=12.04, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.96,pay=3.59,role="targ", itemtype="urn"),comp = new makeOption(prob=0.7, pay=4.9, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.9, pay=3.59, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.2,pay=10.23,role="targ", itemtype="urn"),comp = new makeOption(prob=0.72, pay=2.89, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.2, pay=5.57, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.78,pay=2.89,role="targ", itemtype="urn"),comp = new makeOption(prob=0.06, pay=40.76, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.72, pay=2.89, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.1,pay=20.18,role="targ", itemtype="urn"),comp = new makeOption(prob=0.34, pay=5.92, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.01, pay=20.18, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.45,pay=24.84,role="targ", itemtype="urn"),comp = new makeOption(prob=0.82, pay=13.76, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.45, pay=20.31, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.45,pay=28.51,role="targ", itemtype="urn"),comp = new makeOption(prob=0.15, pay=85.42, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.45, pay=24.84, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.48,pay=9.77,role="targ", itemtype="urn"),comp = new makeOption(prob=0.95, pay=4.88, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.39, pay=9.77, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.64,pay=7.97,role="targ", itemtype="urn"),comp = new makeOption(prob=0.41, pay=12.48, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.56, pay=7.97, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.85,pay=8.94,role="targ", itemtype="urn"),comp = new makeOption(prob=0.62, pay=12.17, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.85, pay=5.22, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.19,pay=15.82,role="targ", itemtype="urn"),comp = new makeOption(prob=0.6, pay=5.08, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.19, pay=12.19, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.8,pay=2.92,role="targ", itemtype="urn"),comp = new makeOption(prob=0.19, pay=12.19, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.7, pay=2.92, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.56,pay=19.13,role="targ", itemtype="urn"),comp = new makeOption(prob=0.97, pay=11.06, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.46, pay=19.13, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.63,pay=19.13,role="targ", itemtype="urn"),comp = new makeOption(prob=0.92, pay=13.21, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.56, pay=19.13, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.68,pay=17.92,role="targ", itemtype="urn"),comp = new makeOption(prob=0.92, pay=13.21, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.68, pay=13.97, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.6,pay=5.12,role="targ", itemtype="urn"),comp = new makeOption(prob=0.15, pay=21.13, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.6, pay=1.69, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.16,pay=24.69,role="targ", itemtype="urn"),comp = new makeOption(prob=0.82, pay=4.84, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.16, pay=20.92, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.46,pay=14.97,role="targ", itemtype="urn"),comp = new makeOption(prob=0.09, pay=74.64, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.38, pay=14.97, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.09,pay=74.64,role="targ", itemtype="urn"),comp = new makeOption(prob=0.69, pay=10.02, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.04, pay=74.64, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.69,pay=14.79,role="targ", itemtype="urn"),comp = new makeOption(prob=0.27, pay=38.03, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.69, pay=10.02, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.22,pay=24.02,role="targ", itemtype="urn"),comp = new makeOption(prob=0.51, pay=10.52, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.17, pay=24.02, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.16,pay=32.42,role="targ", itemtype="urn"),comp = new makeOption(prob=0.51, pay=10.52, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.16, pay=27.87, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.98,pay=5.44,role="targ", itemtype="urn"),comp = new makeOption(prob=0.16, pay=32.42, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.9, pay=5.44, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.16,pay=32.42,role="targ", itemtype="urn"),comp = new makeOption(prob=0.64, pay=8.31, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.08, pay=32.42, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.37,pay=14.43,role="targ", itemtype="urn"),comp = new makeOption(prob=0.16, pay=32.42, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.37, pay=11.28, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.37,pay=14.43,role="targ", itemtype="urn"),comp = new makeOption(prob=0.1, pay=55.81, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.37, pay=10.61, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.17,pay=55.81,role="targ", itemtype="urn"),comp = new makeOption(prob=0.65, pay=14.64, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.1, pay=55.81, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.19,pay=55.81,role="targ", itemtype="urn"),comp = new makeOption(prob=0.43, pay=24.88, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.1, pay=55.81, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.3,pay=17.91,role="targ", itemtype="urn"),comp = new makeOption(prob=0.1, pay=55.81, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.2, pay=17.91, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.3,pay=20.7,role="targ", itemtype="urn"),comp = new makeOption(prob=0.76, pay=8.21, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.3, pay=17.45, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.16,pay=27.13,role="targ", itemtype="urn"),comp = new makeOption(prob=0.71, pay=6.17, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.16, pay=22.98, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.71,pay=6.17,role="targ", itemtype="urn"),comp = new makeOption(prob=0.13, pay=33.57, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.65, pay=6.17, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.42,pay=4.99,role="targ", itemtype="urn"),comp = new makeOption(prob=0.64, pay=3.28, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.42, pay=0.09, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.74,pay=7.87,role="targ", itemtype="urn"),comp = new makeOption(prob=0.15, pay=38.06, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.74, pay=4.33, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.74,pay=9.06,role="targ", itemtype="urn"),comp = new makeOption(prob=0.32, pay=20.67, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.74, pay=4.33, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.17,pay=23.13,role="targ", itemtype="urn"),comp = new makeOption(prob=0.78, pay=5.2, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.17, pay=20.08, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.78,pay=5.2,role="targ", itemtype="urn"),comp = new makeOption(prob=0.37, pay=10.99, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.69, pay=5.2, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.78,pay=5.2,role="targ", itemtype="urn"),comp = new makeOption(prob=0.34, pay=11.76, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.72, pay=5.2, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.43,pay=11.76,role="targ", itemtype="urn"),comp = new makeOption(prob=0.89, pay=5.71, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.34, pay=11.76, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.4,pay=11.76,role="targ", itemtype="urn"),comp = new makeOption(prob=0.19, pay=24.12, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.34, pay=11.76, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.79,pay=8.52,role="targ", itemtype="urn"),comp = new makeOption(prob=0.39, pay=17.37, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.79, pay=5.48, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.62,pay=4.9,role="targ", itemtype="urn"),comp = new makeOption(prob=0.26, pay=11.7, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.57, pay=4.9, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.66,pay=4.66,role="targ", itemtype="urn"),comp = new makeOption(prob=0.26, pay=11.7, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.66, pay=0.37, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.31,pay=5.29,role="targ", itemtype="urn"),comp = new makeOption(prob=0.57, pay=2.86, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.21, pay=5.29, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.85,pay=1.34,role="targ", itemtype="urn"),comp = new makeOption(prob=0.21, pay=5.29, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.78, pay=1.34, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.28,pay=5.29,role="targ", itemtype="urn"),comp = new makeOption(prob=0.54, pay=2.7, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.21, pay=5.29, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.28,pay=8.94,role="targ", itemtype="urn"),comp = new makeOption(prob=0.51, pay=4.9, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.28, pay=5.29, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.28,pay=10.19,role="targ", itemtype="urn"),comp = new makeOption(prob=0.04, pay=76.1, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.28, pay=5.29, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.95,pay=1.55,role="targ", itemtype="urn"),comp = new makeOption(prob=0.28, pay=5.29, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.89, pay=1.55, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.25,pay=22.17,role="targ", itemtype="urn"),comp = new makeOption(prob=0.6, pay=9.41, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.19, pay=22.17, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.43,pay=11.9,role="targ", itemtype="urn"),comp = new makeOption(prob=0.97, pay=5.32, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.36, pay=11.9, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.46,pay=4.34,role="targ", itemtype="urn"),comp = new makeOption(prob=0.2, pay=9.96, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.4, pay=4.34, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.2,pay=9.96,role="targ", itemtype="urn"),comp = new makeOption(prob=0.89, pay=2.25, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.13, pay=9.96, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.2,pay=13.81,role="targ", itemtype="urn"),comp = new makeOption(prob=0.8, pay=3.47, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.2, pay=9.96, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.85,pay=3.26,role="targ", itemtype="urn"),comp = new makeOption(prob=0.2, pay=13.81, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.76, pay=3.26, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.76,pay=3.26,role="targ", itemtype="urn"),comp = new makeOption(prob=0.41, pay=6.11, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.76, pay=0.1, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.91,pay=2.74,role="targ", itemtype="urn"),comp = new makeOption(prob=0.41, pay=6.11, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.85, pay=2.74, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.88,pay=6.82,role="targ", itemtype="urn"),comp = new makeOption(prob=0.42, pay=14.12, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.79, pay=6.82, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.21,pay=13.49,role="targ", itemtype="urn"),comp = new makeOption(prob=0.57, pay=4.9, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.21, pay=8.79, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.12,pay=20.48,role="targ", itemtype="urn"),comp = new makeOption(prob=0.88, pay=2.67, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.02, pay=20.48, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.17,pay=18.09,role="targ", itemtype="urn"),comp = new makeOption(prob=0.72, pay=4.22, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.17, pay=13.61, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.08,pay=28.61,role="targ", itemtype="urn"),comp = new makeOption(prob=0.79, pay=3, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.08, pay=23.64, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.08,pay=23.64,role="targ", itemtype="urn"),comp = new makeOption(prob=0.56, pay=3.5, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.02, pay=23.64, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.65,pay=5.88,role="targ", itemtype="urn"),comp = new makeOption(prob=0.32, pay=11.98, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.65, pay=2.26, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.26,pay=19.4,role="targ", itemtype="urn"),comp = new makeOption(prob=0.65, pay=7.82, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.2, pay=19.4, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.26,pay=23.35,role="targ", itemtype="urn"),comp = new makeOption(prob=0.81, pay=7.46, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.26, pay=19.4, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.4,pay=25.86,role="targ", itemtype="urn"),comp = new makeOption(prob=0.7, pay=14.87, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.35, pay=25.86, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.51,pay=8.49,role="targ", itemtype="urn"),comp = new makeOption(prob=0.19, pay=22.26, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.44, pay=8.49, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.5,pay=3.27,role="targ", itemtype="urn"),comp = new makeOption(prob=0.14, pay=11.89, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.44, pay=3.27, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.83,pay=3.74,role="targ", itemtype="urn"),comp = new makeOption(prob=0.24, pay=12.94, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.74, pay=3.74, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.34,pay=14.71,role="targ", itemtype="urn"),comp = new makeOption(prob=0.87, pay=5.81, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.29, pay=14.71, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.52,pay=10.49,role="targ", itemtype="urn"),comp = new makeOption(prob=0.73, pay=7.53, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.45, pay=10.49, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.45,pay=10.49,role="targ", itemtype="urn"),comp = new makeOption(prob=0.86, pay=5.53, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.4, pay=10.49, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.55,pay=6.87,role="targ", itemtype="urn"),comp = new makeOption(prob=0.88, pay=4.29, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.48, pay=6.87, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.55,pay=6.87,role="targ", itemtype="urn"),comp = new makeOption(prob=0.85, pay=4.45, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.55, pay=2.41, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.98,pay=4.05,role="targ", itemtype="urn"),comp = new makeOption(prob=0.61, pay=6.51, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.89, pay=4.05, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.21,pay=17.11,role="targ", itemtype="urn"),comp = new makeOption(prob=0.89, pay=4.05, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.21, pay=12.14, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.21,pay=12.14,role="targ", itemtype="urn"),comp = new makeOption(prob=0.97, pay=2.65, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.21, pay=8.33, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.85,pay=3.18,role="targ", itemtype="urn"),comp = new makeOption(prob=0.17, pay=16.41, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.78, pay=3.18, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.86,pay=11.46,role="targ", itemtype="urn"),comp = new makeOption(prob=0.56, pay=17.48, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.86, pay=8.24, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.57,pay=17.43,role="targ", itemtype="urn"),comp = new makeOption(prob=0.86, pay=11.46, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.51, pay=17.43, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.29,pay=19.79,role="targ", itemtype="urn"),comp = new makeOption(prob=0.59, pay=9.71, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.2, pay=19.79, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.33,pay=17.2,role="targ", itemtype="urn"),comp = new makeOption(prob=0.63, pay=9.09, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.25, pay=17.2, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.84,pay=6.82,role="targ", itemtype="urn"),comp = new makeOption(prob=0.63, pay=9.09, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.75, pay=6.82, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.5,pay=7.91,role="targ", itemtype="urn"),comp = new makeOption(prob=0.82, pay=4.82, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.42, pay=7.91, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.72,pay=8.26,role="targ", itemtype="urn"),comp = new makeOption(prob=0.45, pay=13.27, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.72, pay=3.27, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.79,pay=8.57,role="targ", itemtype="urn"),comp = new makeOption(prob=0.4, pay=16.99, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.79, pay=4.12, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.23,pay=15.94,role="targ", itemtype="urn"),comp = new makeOption(prob=0.57, pay=6.42, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.23, pay=11.91, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.23,pay=15.94,role="targ", itemtype="urn"),comp = new makeOption(prob=0.9, pay=4.06, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.13, pay=15.94, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.84,pay=5.6,role="targ", itemtype="urn"),comp = new makeOption(prob=0.53, pay=8.92, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.84, pay=1.93, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.17,pay=23.03,role="targ", itemtype="urn"),comp = new makeOption(prob=0.54, pay=7.15, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.17, pay=18.48, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.35,pay=12.81,role="targ", itemtype="urn"),comp = new makeOption(prob=0.6, pay=7.48, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.29, pay=12.81, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.82,pay=3.93,role="targ", itemtype="urn"),comp = new makeOption(prob=0.26, pay=12.36, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.82, pay=0.77, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.77,pay=3.34,role="targ", itemtype="urn"),comp = new makeOption(prob=0.14, pay=18.02, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.69, pay=3.34, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.77,pay=3.34,role="targ", itemtype="urn"),comp = new makeOption(prob=0.18, pay=14.2, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.68, pay=3.34, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.54,pay=4.71,role="targ", itemtype="urn"),comp = new makeOption(prob=0.77, pay=3.34, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.54, pay=1.14, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.23,pay=2.7,role="targ", itemtype="urn"),comp = new makeOption(prob=0.54, pay=1.14, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.13, pay=2.7, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.54,pay=5.89,role="targ", itemtype="urn"),comp = new makeOption(prob=0.8, pay=4, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.54, pay=1.14, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.8,pay=4,role="targ", itemtype="urn"),comp = new makeOption(prob=0.33, pay=9.66, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.73, pay=4, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.05,pay=67.41,role="targ", itemtype="urn"),comp = new makeOption(prob=0.31, pay=10.46, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.05, pay=64.36, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.31,pay=14.33,role="targ", itemtype="urn"),comp = new makeOption(prob=0.05, pay=96.71, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.31, pay=10.46, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.7,pay=5.16,role="targ", itemtype="urn"),comp = new makeOption(prob=0.48, pay=7.6, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.63, pay=5.16, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.97,pay=13.01,role="targ", itemtype="urn"),comp = new makeOption(prob=0.32, pay=39.36, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.9, pay=13.01, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.63,pay=4.51,role="targ", itemtype="urn"),comp = new makeOption(prob=0.87, pay=3.28, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.57, pay=4.51, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.53,pay=6.62,role="targ", itemtype="urn"),comp = new makeOption(prob=0.74, pay=4.68, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.53, pay=1.83, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.88,pay=4.72,role="targ", itemtype="urn"),comp = new makeOption(prob=0.34, pay=12.29, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.78, pay=4.72, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.83,pay=6.9,role="targ", itemtype="urn"),comp = new makeOption(prob=0.18, pay=32.25, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.75, pay=6.9, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.83,pay=10.4,role="targ", itemtype="urn"),comp = new makeOption(prob=0.39, pay=22.49, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.83, pay=6.9, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.83,pay=10.4,role="targ", itemtype="urn"),comp = new makeOption(prob=0.56, pay=15.36, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.83, pay=7.09, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.83,pay=7.09,role="targ", itemtype="urn"),comp = new makeOption(prob=0.6, pay=9.93, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.75, pay=7.09, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.75,pay=7.09,role="targ", itemtype="urn"),comp = new makeOption(prob=0.49, pay=10.76, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.75, pay=3.59, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.85,pay=3.59,role="targ", itemtype="urn"),comp = new makeOption(prob=0.44, pay=6.94, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.75, pay=3.59, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.85,pay=3.59,role="targ", itemtype="urn"),comp = new makeOption(prob=0.49, pay=6.27, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.77, pay=3.59, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.75,pay=3.87,role="targ", itemtype="urn"),comp = new makeOption(prob=0.48, pay=6.06, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.67, pay=3.87, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.18,pay=27.91,role="targ", itemtype="urn"),comp = new makeOption(prob=0.49, pay=10.02, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.18, pay=24.61, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.21,pay=8.75,role="targ", itemtype="urn"),comp = new makeOption(prob=0.75, pay=2.46, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.12, pay=8.75, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.11,pay=12.15,role="targ", itemtype="urn"),comp = new makeOption(prob=0.86, pay=1.56, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.11, pay=7.85, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.31,pay=39.24,role="targ", itemtype="urn"),comp = new makeOption(prob=0.89, pay=13.63, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.31, pay=34.59, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.31,pay=39.22,role="targ", itemtype="urn"),comp = new makeOption(prob=0.62, pay=19.33, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.31, pay=34.59, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.2,pay=19.66,role="targ", itemtype="urn"),comp = new makeOption(prob=0.79, pay=4.86, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.14, pay=19.66, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.23,pay=19.66,role="targ", itemtype="urn"),comp = new makeOption(prob=0.67, pay=6.81, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.14, pay=19.66, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.12,pay=36.81,role="targ", itemtype="urn"),comp = new makeOption(prob=0.67, pay=6.81, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.07, pay=36.81, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.34,pay=13.21,role="targ", itemtype="urn"),comp = new makeOption(prob=0.12, pay=36.81, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.34, pay=9.49, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.9,pay=13.1,role="targ", itemtype="urn"),comp = new makeOption(prob=0.46, pay=25.58, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.9, pay=8.56, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.77,pay=15.21,role="targ", itemtype="urn"),comp = new makeOption(prob=0.46, pay=25.58, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.77, pay=10.69, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.54,pay=9.22,role="targ", itemtype="urn"),comp = new makeOption(prob=0.89, pay=5.61, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.49, pay=9.22, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.89,pay=5.61,role="targ", itemtype="urn"),comp = new makeOption(prob=0.21, pay=23.98, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.89, pay=1.43, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.89,pay=10.53,role="targ", itemtype="urn"),comp = new makeOption(prob=0.27, pay=34.4, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.89, pay=5.61, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.89,pay=15.43,role="targ", itemtype="urn"),comp = new makeOption(prob=0.23, pay=60.41, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.89, pay=10.53, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.23,pay=60.41,role="targ", itemtype="urn"),comp = new makeOption(prob=0.85, pay=16.07, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.15, pay=60.41, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.32,pay=20.11,role="targ", itemtype="urn"),comp = new makeOption(prob=0.11, pay=59.51, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.32, pay=15.81, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.11,pay=59.51,role="targ", itemtype="urn"),comp = new makeOption(prob=0.77, pay=8.34, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.03, pay=59.51, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.17,pay=59.51,role="targ", itemtype="urn"),comp = new makeOption(prob=0.61, pay=16.69, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.11, pay=59.51, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.12,pay=13.77,role="targ", itemtype="urn"),comp = new makeOption(prob=0.76, pay=2.14, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.12, pay=10.59, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.17,pay=19.55,role="targ", itemtype="urn"),comp = new makeOption(prob=0.97, pay=3.38, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.09, pay=19.55, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.63,pay=4.84,role="targ", itemtype="urn"),comp = new makeOption(prob=0.11, pay=27.97, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.63, pay=0.08, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.36,pay=10.78,role="targ", itemtype="urn"),comp = new makeOption(prob=0.63, pay=6.15, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.36, pay=6.05, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.23,pay=17.8,role="targ", itemtype="urn"),comp = new makeOption(prob=0.63, pay=6.54, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.23, pay=14.06, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.29,pay=44.85,role="targ", itemtype="urn"),comp = new makeOption(prob=0.86, pay=14.94, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.29, pay=40.84, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.75,pay=4.17,role="targ", itemtype="urn"),comp = new makeOption(prob=0.5, pay=6.22, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.69, pay=4.17, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.89,pay=9.32,role="targ", itemtype="urn"),comp = new makeOption(prob=0.19, pay=44, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.8, pay=9.32, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.89,pay=9.32,role="targ", itemtype="urn"),comp = new makeOption(prob=0.3, pay=27.82, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.89, pay=4.59, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.41,pay=9.92,role="targ", itemtype="urn"),comp = new makeOption(prob=0.89, pay=4.59, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.35, pay=9.92, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.35,pay=13.09,role="targ", itemtype="urn"),comp = new makeOption(prob=0.59, pay=7.77, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.35, pay=9.92, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.09,pay=50.02,role="targ", itemtype="urn"),comp = new makeOption(prob=0.59, pay=7.77, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.09, pay=46.52, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.65,pay=2.23,role="targ", itemtype="urn"),comp = new makeOption(prob=0.05, pay=26.57, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.59, pay=2.23, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.04,pay=36.43,role="targ", itemtype="urn"),comp = new makeOption(prob=0.65, pay=2.23, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.04, pay=31.66, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.19,pay=14.95,role="targ", itemtype="urn"),comp = new makeOption(prob=0.41, pay=6.78, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.1, pay=14.95, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.97,pay=6.41,role="targ", itemtype="urn"),comp = new makeOption(prob=0.34, pay=18.37, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.97, pay=1.82, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.56,pay=3.15,role="targ", itemtype="urn"),comp = new makeOption(prob=0.97, pay=1.82, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.49, pay=3.15, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.56,pay=3.15,role="targ", itemtype="urn"),comp = new makeOption(prob=0.93, pay=1.9, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.48, pay=3.15, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.48,pay=3.15,role="targ", itemtype="urn"),comp = new makeOption(prob=0.16, pay=9.63, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.39, pay=3.15, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.8,pay=6.85,role="targ", itemtype="urn"),comp = new makeOption(prob=0.19, pay=28.79, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.8, pay=3.01, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.81,pay=6.69,role="targ", itemtype="urn"),comp = new makeOption(prob=0.19, pay=28.79, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.72, pay=6.69, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.83,pay=4.9,role="targ", itemtype="urn"),comp = new makeOption(prob=0.16, pay=25.82, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.77, pay=4.9, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.1,pay=41.73,role="targ", itemtype="urn"),comp = new makeOption(prob=0.83, pay=4.9, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.03, pay=41.73, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.22,pay=35.53,role="targ", itemtype="urn"),comp = new makeOption(prob=0.85, pay=9.28, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.13, pay=35.53, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.61,pay=6.51,role="targ", itemtype="urn"),comp = new makeOption(prob=0.27, pay=14.6, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.61, pay=3.5, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.61,pay=3.5,role="targ", itemtype="urn"),comp = new makeOption(prob=0.03, pay=76.95, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.55, pay=3.5, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.17,pay=19.8,role="targ", itemtype="urn"),comp = new makeOption(prob=0.87, pay=3.87, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.17, pay=16.63, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.92,pay=3.44,role="targ", itemtype="urn"),comp = new makeOption(prob=0.16, pay=19.62, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.85, pay=3.44, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.16,pay=24.07,role="targ", itemtype="urn"),comp = new makeOption(prob=0.82, pay=4.59, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.06, pay=24.07, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.53,pay=7.05,role="targ", itemtype="urn"),comp = new makeOption(prob=0.16, pay=24.07, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.45, pay=7.05, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.71,pay=11.31,role="targ", itemtype="urn"),comp = new makeOption(prob=0.38, pay=21.19, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.71, pay=7.52, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.26,pay=13.71,role="targ", itemtype="urn"),comp = new makeOption(prob=0.52, pay=6.93, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.16, pay=13.71, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.6,pay=6.93,role="targ", itemtype="urn"),comp = new makeOption(prob=0.94, pay=4.44, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.52, pay=6.93, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.18,pay=22.41,role="targ", itemtype="urn"),comp = new makeOption(prob=0.65, pay=6.09, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.12, pay=22.41, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.36,pay=13.76,role="targ", itemtype="urn"),comp = new makeOption(prob=0.11, pay=45, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.3, pay=13.76, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.6,pay=10.94,role="targ", itemtype="urn"),comp = new makeOption(prob=0.32, pay=20.95, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.6, pay=7.66, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.32,pay=25.59,role="targ", itemtype="urn"),comp = new makeOption(prob=0.86, pay=9.41, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.32, pay=20.95, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.83,pay=7.92,role="targ", itemtype="urn"),comp = new makeOption(prob=0.32, pay=20.95, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.78, pay=7.92, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.32,pay=20.95,role="targ", itemtype="urn"),comp = new makeOption(prob=0.59, pay=11.16, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.22, pay=20.95, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.93,pay=4.99,role="targ", itemtype="urn"),comp = new makeOption(prob=0.22, pay=20.95, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.93, pay=1.29, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.76,pay=3.96,role="targ", itemtype="urn"),comp = new makeOption(prob=0.48, pay=6.24, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.67, pay=3.96, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.76,pay=6.88,role="targ", itemtype="urn"),comp = new makeOption(prob=0.28, pay=18.89, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.7, pay=6.88, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.7,pay=6.88,role="targ", itemtype="urn"),comp = new makeOption(prob=0.93, pay=5.23, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.7, pay=2.65, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.75,pay=3.97,role="targ", itemtype="urn"),comp = new makeOption(prob=0.2, pay=14.95, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.69, pay=3.97, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.2,pay=19.6,role="targ", itemtype="urn"),comp = new makeOption(prob=0.55, pay=7.1, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.2, pay=14.95, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.56,pay=5.29,role="targ", itemtype="urn"),comp = new makeOption(prob=0.2, pay=14.95, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.56, pay=0.85, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.27,pay=10.8,role="targ", itemtype="urn"),comp = new makeOption(prob=0.56, pay=5.29, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.22, pay=10.8, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.86,pay=13.06,role="targ", itemtype="urn"),comp = new makeOption(prob=0.43, pay=26.05, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.86, pay=8.39, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.16,pay=19.41,role="targ", itemtype="urn"),comp = new makeOption(prob=0.38, pay=7.96, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.11, pay=19.41, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.74,pay=4.16,role="targ", itemtype="urn"),comp = new makeOption(prob=0.38, pay=7.96, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.66, pay=4.16, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.28,pay=24.15,role="targ", itemtype="urn"),comp = new makeOption(prob=0.98, pay=6.97, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.2, pay=24.15, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.28,pay=24.15,role="targ", itemtype="urn"),comp = new makeOption(prob=0.65, pay=10.59, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.28, pay=19.63, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.21,pay=25.64,role="targ", itemtype="urn"),comp = new makeOption(prob=0.59, pay=9.08, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.15, pay=25.64, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.59,pay=13.26,role="targ", itemtype="urn"),comp = new makeOption(prob=0.08, pay=93.26, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.59, pay=9.08, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.59,pay=9.08,role="targ", itemtype="urn"),comp = new makeOption(prob=0.16, pay=33.69, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.59, pay=5.86, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.68,pay=7.9,role="targ", itemtype="urn"),comp = new makeOption(prob=0.16, pay=33.69, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.68, pay=3.06, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.68,pay=11.66,role="targ", itemtype="urn"),comp = new makeOption(prob=0.19, pay=41.99, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.68, pay=7.9, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.42,pay=20.12,role="targ", itemtype="urn"),comp = new makeOption(prob=0.13, pay=67.24, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.42, pay=17, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.42,pay=21.51,role="targ", itemtype="urn"),comp = new makeOption(prob=0.98, pay=9.24, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.42, pay=17, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.98,pay=9.24,role="targ", itemtype="urn"),comp = new makeOption(prob=0.77, pay=11.67, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.98, pay=6.15, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.98,pay=14.1,role="targ", itemtype="urn"),comp = new makeOption(prob=0.32, pay=43.56, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.98, pay=9.24, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.84,pay=4.33,role="targ", itemtype="urn"),comp = new makeOption(prob=0.53, pay=6.9, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.77, pay=4.33, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.82,pay=6.67,role="targ", itemtype="urn"),comp = new makeOption(prob=0.49, pay=11.11, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.82, pay=2.59, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.82,pay=6.85,role="targ", itemtype="urn"),comp = new makeOption(prob=0.59, pay=9.53, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.82, pay=2.59, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.38,pay=22.58,role="targ", itemtype="urn"),comp = new makeOption(prob=0.87, pay=9.87, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.38, pay=18.87, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.43,pay=18.87,role="targ", itemtype="urn"),comp = new makeOption(prob=0.69, pay=11.78, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.38, pay=18.87, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.69,pay=11.78,role="targ", itemtype="urn"),comp = new makeOption(prob=0.93, pay=8.74, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.69, pay=7.58, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.75,pay=6.6,role="targ", itemtype="urn"),comp = new makeOption(prob=0.14, pay=36.82, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.68, pay=6.6, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.84,pay=6.6,role="targ", itemtype="urn"),comp = new makeOption(prob=0.41, pay=13.63, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.75, pay=6.6, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.46,pay=13.63,role="targ", itemtype="urn"),comp = new makeOption(prob=0.2, pay=31.83, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.41, pay=13.63, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.77,pay=3.08,role="targ", itemtype="urn"),comp = new makeOption(prob=0.13, pay=18.89, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.69, pay=3.08, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.68,pay=4.7,role="targ", itemtype="urn"),comp = new makeOption(prob=0.06, pay=50.49, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.62, pay=4.7, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.06,pay=50.49,role="targ", itemtype="urn"),comp = new makeOption(prob=0.53, pay=5.98, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.06, pay=46.61, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.3,pay=20.85,role="targ", itemtype="urn"),comp = new makeOption(prob=0.76, pay=8.32, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.3, pay=16.66, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.53,pay=11.97,role="targ", itemtype="urn"),comp = new makeOption(prob=0.3, pay=20.85, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.46, pay=11.97, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.67,pay=14.35,role="targ", itemtype="urn"),comp = new makeOption(prob=0.33, pay=29.27, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.57, pay=14.35, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.36,pay=21.39,role="targ", itemtype="urn"),comp = new makeOption(prob=0.66, pay=11.6, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.27, pay=21.39, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.18,pay=3.46,role="targ", itemtype="urn"),comp = new makeOption(prob=0.74, pay=0.83, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.12, pay=3.46, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.11,pay=57.75,role="targ", itemtype="urn"),comp = new makeOption(prob=0.85, pay=7.61, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.03, pay=57.75, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.68,pay=4.52,role="targ", itemtype="urn"),comp = new makeOption(prob=0.18, pay=17.12, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.62, pay=4.52, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.47,pay=16.07,role="targ", itemtype="urn"),comp = new makeOption(prob=0.9, pay=8.46, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.4, pay=16.07, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.85,pay=3.32,role="targ", itemtype="urn"),comp = new makeOption(prob=0.44, pay=6.39, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.78, pay=3.32, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.12,pay=9.46,role="targ", itemtype="urn"),comp = new makeOption(prob=0.65, pay=1.77, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.12, pay=4.84, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.87,pay=1.32,role="targ", itemtype="urn"),comp = new makeOption(prob=0.12, pay=9.46, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.78, pay=1.32, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.22,pay=12.99,role="targ", itemtype="urn"),comp = new makeOption(prob=0.8, pay=3.52, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.14, pay=12.99, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.73,pay=2.42,role="targ", itemtype="urn"),comp = new makeOption(prob=0.14, pay=12.99, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.65, pay=2.42, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.38,pay=20.38,role="targ", itemtype="urn"),comp = new makeOption(prob=0.89, pay=8.74, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.29, pay=20.38, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.5,pay=6.58,role="targ", itemtype="urn"),comp = new makeOption(prob=0.8, pay=4.08, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.5, pay=3.23, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.8,pay=4.08,role="targ", itemtype="urn"),comp = new makeOption(prob=0.33, pay=9.79, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.72, pay=4.08, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.38,pay=8.55,role="targ", itemtype="urn"),comp = new makeOption(prob=0.8, pay=4.08, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.38, pay=3.55, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.97,pay=1.4,role="targ", itemtype="urn"),comp = new makeOption(prob=0.38, pay=3.55, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.9, pay=1.4, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.54,pay=5.52,role="targ", itemtype="urn"),comp = new makeOption(prob=0.81, pay=3.69, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.45, pay=5.52, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.54,pay=10.28,role="targ", itemtype="urn"),comp = new makeOption(prob=0.97, pay=5.74, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.54, pay=5.52, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.22,pay=13.42,role="targ", itemtype="urn"),comp = new makeOption(prob=0.71, pay=4.24, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.22, pay=9.38, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.85,pay=10.5,role="targ", itemtype="urn"),comp = new makeOption(prob=0.58, pay=15.31, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.85, pay=7.08, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.42,pay=14.67,role="targ", itemtype="urn"),comp = new makeOption(prob=0.22, pay=28.07, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.33, pay=14.67, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.54,pay=6.83,role="targ", itemtype="urn"),comp = new makeOption(prob=0.74, pay=4.95, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.46, pay=6.83, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.13,pay=27.83,role="targ", itemtype="urn"),comp = new makeOption(prob=0.74, pay=4.95, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.08, pay=27.83, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.08,pay=32.76,role="targ", itemtype="urn"),comp = new makeOption(prob=0.76, pay=3.52, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.08, pay=27.83, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.08,pay=27.83,role="targ", itemtype="urn"),comp = new makeOption(prob=0.49, pay=4.63, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.08, pay=22.9, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.76,pay=6.44,role="targ", itemtype="urn"),comp = new makeOption(prob=0.09, pay=54.78, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.68, pay=6.44, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.78,pay=5.36,role="targ", itemtype="urn"),comp = new makeOption(prob=0.1, pay=41.72, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.7, pay=5.36, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.45,pay=8.3,role="targ", itemtype="urn"),comp = new makeOption(prob=0.7, pay=5.36, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.45, pay=4.64, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.31,pay=15.89,role="targ", itemtype="urn"),comp = new makeOption(prob=0.06, pay=84.74, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.22, pay=15.89, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.83,pay=3.44,role="targ", itemtype="urn"),comp = new makeOption(prob=0.04, pay=65.08, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.74, pay=3.44, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.12,pay=65.08,role="targ", itemtype="urn"),comp = new makeOption(prob=0.36, pay=22.03, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.04, pay=65.08, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.86,pay=5.6,role="targ", itemtype="urn"),comp = new makeOption(prob=0.45, pay=10.54, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.79, pay=5.6, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.42,pay=5.83,role="targ", itemtype="urn"),comp = new makeOption(prob=0.11, pay=22.21, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.42, pay=2.8, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.77,pay=3.98,role="targ", itemtype="urn"),comp = new makeOption(prob=0.38, pay=8.13, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.68, pay=3.98, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.77,pay=3.98,role="targ", itemtype="urn"),comp = new makeOption(prob=0.49, pay=6.19, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.71, pay=3.98, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.61,pay=4.9,role="targ", itemtype="urn"),comp = new makeOption(prob=0.11, pay=28.18, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.61, pay=0.28, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.61,pay=0.28,role="targ", itemtype="urn"),comp = new makeOption(prob=0.05, pay=3.68, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.53, pay=0.28, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.86,pay=7.87,role="targ", itemtype="urn"),comp = new makeOption(prob=0.14, pay=47.45, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.8, pay=7.87, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.92,pay=7.87,role="targ", itemtype="urn"),comp = new makeOption(prob=0.46, pay=15.71, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.86, pay=7.87, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.67,pay=7.99,role="targ", itemtype="urn"),comp = new makeOption(prob=0.1, pay=51.65, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.67, pay=3.71, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.18,pay=51.65,role="targ", itemtype="urn"),comp = new makeOption(prob=0.5, pay=18.74, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.1, pay=51.65, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.6,pay=4.14,role="targ", itemtype="urn"),comp = new makeOption(prob=0.92, pay=2.71, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.6, pay=0.64, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.22,pay=19.2,role="targ", itemtype="urn"),comp = new makeOption(prob=0.68, pay=6.06, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.22, pay=15.35, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.22,pay=15.35,role="targ", itemtype="urn"),comp = new makeOption(prob=0.89, pay=3.7, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.22, pay=10.87, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.22,pay=20.18,role="targ", itemtype="urn"),comp = new makeOption(prob=0.65, pay=6.71, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.22, pay=15.35, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.85,pay=2.62,role="targ", itemtype="urn"),comp = new makeOption(prob=0.57, pay=3.94, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.77, pay=2.62, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.57,pay=8.29,role="targ", itemtype="urn"),comp = new makeOption(prob=0.84, pay=5.59, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.57, pay=3.94, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.2,pay=10.59,role="targ", itemtype="urn"),comp = new makeOption(prob=0.92, pay=2.32, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.2, pay=6.99, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.4,pay=15.1,role="targ", itemtype="urn"),comp = new makeOption(prob=0.72, pay=8.42, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.3, pay=15.1, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.84,pay=5.85,role="targ", itemtype="urn"),comp = new makeOption(prob=0.21, pay=23.84, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.79, pay=5.85, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.21,pay=23.84,role="targ", itemtype="urn"),comp = new makeOption(prob=0.8, pay=6.15, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.15, pay=23.84, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.17,pay=17.73,role="targ", itemtype="urn"),comp = new makeOption(prob=0.78, pay=3.76, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.08, pay=17.73, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.65,pay=2.3,role="targ", itemtype="urn"),comp = new makeOption(prob=0.08, pay=17.73, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.56, pay=2.3, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.56,pay=6.18,role="targ", itemtype="urn"),comp = new makeOption(prob=0.84, pay=4.08, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.56, pay=2.3, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.1,pay=75.45,role="targ", itemtype="urn"),comp = new makeOption(prob=0.42, pay=17.96, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.02, pay=75.45, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.63,pay=6.28,role="targ", itemtype="urn"),comp = new makeOption(prob=0.95, pay=4.18, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.56, pay=6.28, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.95,pay=4.18,role="targ", itemtype="urn"),comp = new makeOption(prob=0.62, pay=6.43, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.89, pay=4.18, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.62,pay=6.43,role="targ", itemtype="urn"),comp = new makeOption(prob=0.07, pay=57.84, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.52, pay=6.43, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.62,pay=10.22,role="targ", itemtype="urn"),comp = new makeOption(prob=0.33, pay=19.17, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.55, pay=10.22, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.86,pay=7.33,role="targ", itemtype="urn"),comp = new makeOption(prob=0.62, pay=10.22, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.86, pay=2.37, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.18,pay=25.99,role="targ", itemtype="urn"),comp = new makeOption(prob=0.45, pay=10.68, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.18, pay=21.17, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.34,pay=21.16,role="targ", itemtype="urn"),comp = new makeOption(prob=0.81, pay=8.84, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.34, pay=16.91, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.17,pay=42.6,role="targ", itemtype="urn"),comp = new makeOption(prob=0.81, pay=8.84, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.17, pay=37.81, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.67,pay=10.65,role="targ", itemtype="urn"),comp = new makeOption(prob=0.17, pay=42.6, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.59, pay=10.65, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.65,pay=10.65,role="targ", itemtype="urn"),comp = new makeOption(prob=0.97, pay=7.15, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.59, pay=10.65, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.56,pay=4.92,role="targ", itemtype="urn"),comp = new makeOption(prob=0.89, pay=3.1, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.5, pay=4.92, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.32,pay=16.92,role="targ", itemtype="urn"),comp = new makeOption(prob=0.64, pay=8.57, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.32, pay=12.52, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.32,pay=16.92,role="targ", itemtype="urn"),comp = new makeOption(prob=0.57, pay=9.56, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.25, pay=16.92, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.11,pay=65.97,role="targ", itemtype="urn"),comp = new makeOption(prob=0.88, pay=8.41, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.05, pay=65.97, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.11,pay=65.97,role="targ", itemtype="urn"),comp = new makeOption(prob=0.89, pay=8.29, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.03, pay=65.97, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.03,pay=65.97,role="targ", itemtype="urn"),comp = new makeOption(prob=0.36, pay=5.14, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.03, pay=61.91, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.73,pay=3.05,role="targ", itemtype="urn"),comp = new makeOption(prob=0.11, pay=20.41, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.68, pay=3.05, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.15,pay=24.66,role="targ", itemtype="urn"),comp = new makeOption(prob=0.66, pay=5.42, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.05, pay=24.66, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.65,pay=5.06,role="targ", itemtype="urn"),comp = new makeOption(prob=0.28, pay=11.89, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.65, pay=1.85, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.71,pay=5.06,role="targ", itemtype="urn"),comp = new makeOption(prob=0.92, pay=3.89, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.65, pay=5.06, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.71,pay=5.06,role="targ", itemtype="urn"),comp = new makeOption(prob=0.18, pay=20.23, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.71, pay=1.88, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.95,pay=4.66,role="targ", itemtype="urn"),comp = new makeOption(prob=0.06, pay=68.84, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.86, pay=4.66, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.27,pay=16.5,role="targ", itemtype="urn"),comp = new makeOption(prob=0.06, pay=68.84, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.27, pay=13.44, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.71,pay=5.05,role="targ", itemtype="urn"),comp = new makeOption(prob=0.27, pay=13.44, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.65, pay=5.05, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.77,pay=11.63,role="targ", itemtype="urn"),comp = new makeOption(prob=0.43, pay=20.99, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.69, pay=11.63, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.96,pay=8.36,role="targ", itemtype="urn"),comp = new makeOption(prob=0.69, pay=11.63, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.96, pay=3.81, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.72,pay=4.58,role="targ", itemtype="urn"),comp = new makeOption(prob=0.95, pay=3.45, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.65, pay=4.58, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.44,pay=5.7,role="targ", itemtype="urn"),comp = new makeOption(prob=0.69, pay=3.66, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.44, pay=1.22, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.92,pay=6.52,role="targ", itemtype="urn"),comp = new makeOption(prob=0.16, pay=38.41, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.92, pay=2.81, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.88,pay=6.79,role="targ", itemtype="urn"),comp = new makeOption(prob=0.16, pay=38.41, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.79, pay=6.79, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.62,pay=3,role="targ", itemtype="urn"),comp = new makeOption(prob=0.21, pay=9.03, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.57, pay=3, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.21,pay=9.03,role="targ", itemtype="urn"),comp = new makeOption(prob=0.6, pay=3.14, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.13, pay=9.03, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.67,pay=3.14,role="targ", itemtype="urn"),comp = new makeOption(prob=0.43, pay=4.88, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.6, pay=3.14, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.67,pay=3.14,role="targ", itemtype="urn"),comp = new makeOption(prob=0.03, pay=80.65, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.6, pay=3.14, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.55,pay=3.62,role="targ", itemtype="urn"),comp = new makeOption(prob=0.29, pay=6.82, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.47, pay=3.62, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.89,pay=9.69,role="targ", itemtype="urn"),comp = new makeOption(prob=0.25, pay=34.46, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.82, pay=9.69, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.88,pay=7.95,role="targ", itemtype="urn"),comp = new makeOption(prob=0.16, pay=45.21, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.88, pay=3.44, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.12,pay=27.64,role="targ", itemtype="urn"),comp = new makeOption(prob=0.86, pay=3.96, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.12, pay=24.39, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.7,pay=3.71,role="targ", itemtype="urn"),comp = new makeOption(prob=0.42, pay=6.12, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.65, pay=3.71, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.82,pay=1.92,role="targ", itemtype="urn"),comp = new makeOption(prob=0.1, pay=15.17, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.77, pay=1.92, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.24,pay=33.41,role="targ", itemtype="urn"),comp = new makeOption(prob=0.89, pay=8.86, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.24, pay=28.47, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.73,pay=3.67,role="targ", itemtype="urn"),comp = new makeOption(prob=0.32, pay=8.44, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.66, pay=3.67, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.35,pay=7.56,role="targ", itemtype="urn"),comp = new makeOption(prob=0.73, pay=3.67, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.26, pay=7.56, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.26,pay=16.36,role="targ", itemtype="urn"),comp = new makeOption(prob=0.98, pay=4.3, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.19, pay=16.36, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.67,pay=6.3,role="targ", itemtype="urn"),comp = new makeOption(prob=0.12, pay=34.88, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.58, pay=6.3, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.84,pay=7.9,role="targ", itemtype="urn"),comp = new makeOption(prob=0.44, pay=14.99, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.84, pay=2.98, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.84,pay=2.98,role="targ", itemtype="urn"),comp = new makeOption(prob=0.45, pay=5.52, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.75, pay=2.98, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.44,pay=11.37,role="targ", itemtype="urn"),comp = new makeOption(prob=0.68, pay=7.39, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.38, pay=11.37, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.38,pay=11.37,role="targ", itemtype="urn"),comp = new makeOption(prob=0.82, pay=5.27, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.38, pay=8.22, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.45,pay=11.37,role="targ", itemtype="urn"),comp = new makeOption(prob=0.17, pay=30.52, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.38, pay=11.37, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.69,pay=12.7,role="targ", itemtype="urn"),comp = new makeOption(prob=0.36, pay=24.1, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.6, pay=12.7, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.67,pay=12.7,role="targ", itemtype="urn"),comp = new makeOption(prob=0.19, pay=44.44, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.6, pay=12.7, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.95,pay=10.16,role="targ", itemtype="urn"),comp = new makeOption(prob=0.6, pay=16.13, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.95, pay=6.47, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.18,pay=53.86,role="targ", itemtype="urn"),comp = new makeOption(prob=0.6, pay=16.13, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.18, pay=50.71, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.57,pay=20.18,role="targ", itemtype="urn"),comp = new makeOption(prob=0.3, pay=38.67, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.57, pay=16.95, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.8,pay=7.26,role="targ", itemtype="urn"),comp = new makeOption(prob=0.47, pay=12.43, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.8, pay=3.74, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.39,pay=15.02,role="targ", itemtype="urn"),comp = new makeOption(prob=0.69, pay=8.48, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.39, pay=10.4, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.87,pay=4.38,role="targ", itemtype="urn"),comp = new makeOption(prob=0.23, pay=16.98, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.8, pay=4.38, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.82,pay=11.26,role="targ", itemtype="urn"),comp = new makeOption(prob=0.15, pay=61.54, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.82, pay=6.96, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.74,pay=9.97,role="targ", itemtype="urn"),comp = new makeOption(prob=0.52, pay=14.35, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.64, pay=9.97, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.81,pay=4.77,role="targ", itemtype="urn"),comp = new makeOption(prob=0.56, pay=6.94, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.81, pay=1.33, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.79,pay=4.9,role="targ", itemtype="urn"),comp = new makeOption(prob=0.56, pay=6.94, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.79, pay=1.18, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.65,pay=6.94,role="targ", itemtype="urn"),comp = new makeOption(prob=0.41, pay=11.03, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.56, pay=6.94, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.56,pay=6.94,role="targ", itemtype="urn"),comp = new makeOption(prob=0.17, pay=22.32, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.48, pay=6.94, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.17,pay=22.32,role="targ", itemtype="urn"),comp = new makeOption(prob=0.58, pay=6.61, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.17, pay=18.4, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.71,pay=6.5,role="targ", itemtype="urn"),comp = new makeOption(prob=0.5, pay=9.31, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.65, pay=6.5, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.8,pay=6.5,role="targ", itemtype="urn"),comp = new makeOption(prob=0.42, pay=12.48, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.71, pay=6.5, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.27,pay=13.89,role="targ", itemtype="urn"),comp = new makeOption(prob=0.82, pay=4.5, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.27, pay=10.4, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.82,pay=4.5,role="targ", itemtype="urn"),comp = new makeOption(prob=0.52, pay=7.09, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.77, pay=4.5, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.86,pay=4.29,role="targ", itemtype="urn"),comp = new makeOption(prob=0.52, pay=7.09, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.79, pay=4.29, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.77,pay=4.84,role="targ", itemtype="urn"),comp = new makeOption(prob=0.45, pay=8.18, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.71, pay=4.84, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.77,pay=4.84,role="targ", itemtype="urn"),comp = new makeOption(prob=0.35, pay=10.73, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.67, pay=4.84, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.53,pay=9.3,role="targ", itemtype="urn"),comp = new makeOption(prob=0.25, pay=19.53, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.53, pay=5.17, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.51,pay=5,role="targ", itemtype="urn"),comp = new makeOption(prob=0.2, pay=12.99, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.45, pay=5, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.71,pay=9.12,role="targ", itemtype="urn"),comp = new makeOption(prob=0.91, pay=7.09, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.71, pay=5.74, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.19,pay=33.44,role="targ", itemtype="urn"),comp = new makeOption(prob=0.91, pay=7.09, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.14, pay=33.44, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.33,pay=16.89,role="targ", itemtype="urn"),comp = new makeOption(prob=0.97, pay=5.78, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.26, pay=16.89, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.32,pay=16.89,role="targ", itemtype="urn"),comp = new makeOption(prob=0.06, pay=83.93, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.26, pay=16.89, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.75,pay=2.84,role="targ", itemtype="urn"),comp = new makeOption(prob=0.25, pay=8.36, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.69, pay=2.84, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.71,pay=9.45,role="targ", itemtype="urn"),comp = new makeOption(prob=0.09, pay=71.86, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.71, pay=4.88, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.41,pay=11.21,role="targ", itemtype="urn"),comp = new makeOption(prob=0.08, pay=56.24, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.41, pay=7.01, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.75,pay=6.08,role="targ", itemtype="urn"),comp = new makeOption(prob=0.2, pay=23.25, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.66, pay=6.08, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.12,pay=12.81,role="targ", itemtype="urn"),comp = new makeOption(prob=0.65, pay=2.28, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.02, pay=12.81, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.86,pay=1.73,role="targ", itemtype="urn"),comp = new makeOption(prob=0.12, pay=12.81, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.76, pay=1.73, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.76,pay=4.79,role="targ", itemtype="urn"),comp = new makeOption(prob=0.33, pay=11.1, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.76, pay=1.73, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.22,pay=11.11,role="targ", itemtype="urn"),comp = new makeOption(prob=0.88, pay=2.83, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.22, pay=7.28, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.88,pay=10.99,role="targ", itemtype="urn"),comp = new makeOption(prob=0.35, pay=27.77, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.88, pay=6.1, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.71,pay=7.53,role="targ", itemtype="urn"),comp = new makeOption(prob=0.12, pay=44.86, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.71, pay=3.17, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.12,pay=44.86,role="targ", itemtype="urn"),comp = new makeOption(prob=0.69, pay=7.7, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.12, pay=41.67, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.57,pay=9.28,role="targ", itemtype="urn"),comp = new makeOption(prob=0.12, pay=44.86, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.49, pay=9.28, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.49,pay=9.28,role="targ", itemtype="urn"),comp = new makeOption(prob=0.73, pay=6.32, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.49, pay=5.51, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.31,pay=17.92,role="targ", itemtype="urn"),comp = new makeOption(prob=0.8, pay=6.88, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.25, pay=17.92, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.78,pay=3.28,role="targ", itemtype="urn"),comp = new makeOption(prob=0.13, pay=19.38, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.69, pay=3.28, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.78,pay=3.28,role="targ", itemtype="urn"),comp = new makeOption(prob=0.39, pay=6.49, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.71, pay=3.28, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.28,pay=19.46,role="targ", itemtype="urn"),comp = new makeOption(prob=0.73, pay=7.39, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.21, pay=19.46, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.22,pay=19.23,role="targ", itemtype="urn"),comp = new makeOption(prob=0.69, pay=6.07, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.22, pay=15.1, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.96,pay=5.11,role="targ", itemtype="urn"),comp = new makeOption(prob=0.43, pay=11.45, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.96, pay=0.23, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.49,pay=5.47,role="targ", itemtype="urn"),comp = new makeOption(prob=0.18, pay=14.93, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.49, pay=2.42, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.11,pay=26.67,role="targ", itemtype="urn"),comp = new makeOption(prob=0.76, pay=3.83, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.06, pay=26.67, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.61,pay=2.57,role="targ", itemtype="urn"),comp = new makeOption(prob=0.06, pay=26.67, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.53, pay=2.57, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.86,pay=11.77,role="targ", itemtype="urn"),comp = new makeOption(prob=0.25, pay=40.84, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.86, pay=6.94, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.11,pay=27.07,role="targ", itemtype="urn"),comp = new makeOption(prob=0.77, pay=4.03, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.11, pay=23.66, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.33,pay=9.36,role="targ", itemtype="urn"),comp = new makeOption(prob=0.77, pay=4.03, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.33, pay=5.91, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.78,pay=2.52,role="targ", itemtype="urn"),comp = new makeOption(prob=0.33, pay=5.91, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.68, pay=2.52, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.61,pay=5.34,role="targ", itemtype="urn"),comp = new makeOption(prob=0.16, pay=19.92, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.51, pay=5.34, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.91,pay=3.89,role="targ", itemtype="urn"),comp = new makeOption(prob=0.33, pay=10.79, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.84, pay=3.89, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.39,pay=10.79,role="targ", itemtype="urn"),comp = new makeOption(prob=0.71, pay=5.89, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.33, pay=10.79, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.85,pay=6.98,role="targ", itemtype="urn"),comp = new makeOption(prob=0.15, pay=40.2, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.78, pay=6.98, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.32,pay=16.98,role="targ", itemtype="urn"),comp = new makeOption(prob=0.78, pay=6.98, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.22, pay=16.98, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.32,pay=16.98,role="targ", itemtype="urn"),comp = new makeOption(prob=0.8, pay=6.82, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.23, pay=16.98, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.37,pay=16.98,role="targ", itemtype="urn"),comp = new makeOption(prob=0.58, pay=10.99, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.32, pay=16.98, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.41,pay=16.98,role="targ", itemtype="urn"),comp = new makeOption(prob=0.79, pay=8.77, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.32, pay=16.98, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.99,pay=6.97,role="targ", itemtype="urn"),comp = new makeOption(prob=0.41, pay=16.98, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.99, pay=1.98, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.9,pay=4.05,role="targ", itemtype="urn"),comp = new makeOption(prob=0.49, pay=7.4, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.83, pay=4.05, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.13,pay=11.49,role="targ", itemtype="urn"),comp = new makeOption(prob=0.77, pay=1.95, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.04, pay=11.49, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.55,pay=14.31,role="targ", itemtype="urn"),comp = new makeOption(prob=0.19, pay=41.17, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.55, pay=10.4, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.19,pay=45.65,role="targ", itemtype="urn"),comp = new makeOption(prob=0.52, pay=17, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.19, pay=41.17, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.98,pay=5.58,role="targ", itemtype="urn"),comp = new makeOption(prob=0.36, pay=15.4, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.88, pay=5.58, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.98,pay=8.64,role="targ", itemtype="urn"),comp = new makeOption(prob=0.67, pay=12.6, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.98, pay=5.58, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.98,pay=5.58,role="targ", itemtype="urn"),comp = new makeOption(prob=0.46, pay=11.77, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.9, pay=5.58, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.9,pay=5.58,role="targ", itemtype="urn"),comp = new makeOption(prob=0.17, pay=28.9, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.83, pay=5.58, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.27,pay=17.03,role="targ", itemtype="urn"),comp = new makeOption(prob=0.83, pay=5.58, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.2, pay=17.03, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.22,pay=23.21,role="targ", itemtype="urn"),comp = new makeOption(prob=0.81, pay=6.39, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.14, pay=23.21, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.83,pay=4.06,role="targ", itemtype="urn"),comp = new makeOption(prob=0.36, pay=9.31, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.83, pay=1.05, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.83,pay=4.94,role="targ", itemtype="urn"),comp = new makeOption(prob=0.14, pay=29.94, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.83, pay=1.05, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.69,pay=3.96,role="targ", itemtype="urn"),comp = new makeOption(prob=0.97, pay=2.82, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.63, pay=3.96, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.21,pay=21.36,role="targ", itemtype="urn"),comp = new makeOption(prob=0.46, pay=9.68, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.13, pay=21.36, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.69,pay=4.26,role="targ", itemtype="urn"),comp = new makeOption(prob=0.12, pay=23.59, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.63, pay=4.26, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.26,pay=28.61,role="targ", itemtype="urn"),comp = new makeOption(prob=0.96, pay=7.77, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.26, pay=25.03, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.43,pay=10.21,role="targ", itemtype="urn"),comp = new makeOption(prob=0.83, pay=5.36, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.37, pay=10.21, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.94,pay=3.93,role="targ", itemtype="urn"),comp = new makeOption(prob=0.66, pay=5.61, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.85, pay=3.93, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.12,pay=62.7,role="targ", itemtype="urn"),comp = new makeOption(prob=0.35, pay=21.72, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.12, pay=59.31, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.12,pay=21.37,role="targ", itemtype="urn"),comp = new makeOption(prob=0.9, pay=2.96, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.07, pay=21.37, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.15,pay=17.34,role="targ", itemtype="urn"),comp = new makeOption(prob=0.73, pay=3.57, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.09, pay=17.34, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.09,pay=17.34,role="targ", itemtype="urn"),comp = new makeOption(prob=0.64, pay=2.52, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.09, pay=12.78, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.76,pay=1.56,role="targ", itemtype="urn"),comp = new makeOption(prob=0.09, pay=12.78, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.66, pay=1.56, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.73,pay=7.2,role="targ", itemtype="urn"),comp = new makeOption(prob=0.33, pay=15.66, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.73, pay=2.76, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.4,pay=5.66,role="targ", itemtype="urn"),comp = new makeOption(prob=0.14, pay=16.55, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.32, pay=5.66, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.53,pay=13.24,role="targ", itemtype="urn"),comp = new makeOption(prob=0.86, pay=8.17, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.53, pay=8.82, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.17,pay=16.25,role="targ", itemtype="urn"),comp = new makeOption(prob=0.43, pay=6.34, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.11, pay=16.25, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.91,pay=5.1,role="targ", itemtype="urn"),comp = new makeOption(prob=0.32, pay=14.41, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.91, pay=1.62, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.91,pay=9.25,role="targ", itemtype="urn"),comp = new makeOption(prob=0.4, pay=20.94, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.91, pay=5.1, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.46,pay=9.13,role="targ", itemtype="urn"),comp = new makeOption(prob=0.76, pay=5.53, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.46, pay=4.88, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.58,pay=9.9,role="targ", itemtype="urn"),comp = new makeOption(prob=0.07, pay=85.15, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.5, pay=9.9, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.61,pay=20.47,role="targ", itemtype="urn"),comp = new makeOption(prob=0.31, pay=40.01, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.61, pay=15.48, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.61,pay=19.2,role="targ", itemtype="urn"),comp = new makeOption(prob=0.22, pay=54.64, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.61, pay=15.48, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.22,pay=58.44,role="targ", itemtype="urn"),comp = new makeOption(prob=0.71, pay=17.72, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.22, pay=54.64, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.88,pay=3.65,role="targ", itemtype="urn"),comp = new makeOption(prob=0.18, pay=18.24, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.81, pay=3.65, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.4,pay=8.12,role="targ", itemtype="urn"),comp = new makeOption(prob=0.18, pay=18.24, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.4, pay=3.77, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.14,pay=13.21,role="targ", itemtype="urn"),comp = new makeOption(prob=0.62, pay=3.04, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.14, pay=8.91, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.62,pay=6.12,role="targ", itemtype="urn"),comp = new makeOption(prob=0.29, pay=12.95, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.62, pay=3.04, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.29,pay=12.95,role="targ", itemtype="urn"),comp = new makeOption(prob=0.94, pay=4.04, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.23, pay=12.95, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.37,pay=12.95,role="targ", itemtype="urn"),comp = new makeOption(prob=0.67, pay=7.16, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.29, pay=12.95, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.75,pay=7.16,role="targ", itemtype="urn"),comp = new makeOption(prob=0.33, pay=16.44, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.67, pay=7.16, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.06,pay=14.53,role="targ", itemtype="urn"),comp = new makeOption(prob=0.28, pay=3.13, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.06, pay=10.12, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.06,pay=18.46,role="targ", itemtype="urn"),comp = new makeOption(prob=0.82, pay=1.36, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.06, pay=14.53, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.61,pay=3.9,role="targ", itemtype="urn"),comp = new makeOption(prob=0.9, pay=2.63, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.51, pay=3.9, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.64,pay=3.4,role="targ", itemtype="urn"),comp = new makeOption(prob=0.22, pay=9.87, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.54, pay=3.4, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.48,pay=4.51,role="targ", itemtype="urn"),comp = new makeOption(prob=0.22, pay=9.87, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.4, pay=4.51, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.55,pay=6.27,role="targ", itemtype="urn"),comp = new makeOption(prob=0.77, pay=4.48, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.48, pay=6.27, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.55,pay=6.27,role="targ", itemtype="urn"),comp = new makeOption(prob=0.28, pay=12.42, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.48, pay=6.27, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.95,pay=6.13,role="targ", itemtype="urn"),comp = new makeOption(prob=0.13, pay=45.33, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.87, pay=6.13, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.87,pay=10.17,role="targ", itemtype="urn"),comp = new makeOption(prob=0.14, pay=61.3, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.87, pay=6.13, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.55,pay=4.34,role="targ", itemtype="urn"),comp = new makeOption(prob=0.32, pay=7.46, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.46, pay=4.34, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.17,pay=19.55,role="targ", itemtype="urn"),comp = new makeOption(prob=0.7, pay=4.81, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.17, pay=15.95, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.88,pay=3.83,role="targ", itemtype="urn"),comp = new makeOption(prob=0.17, pay=19.55, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.83, pay=3.83, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.17,pay=19.55,role="targ", itemtype="urn"),comp = new makeOption(prob=0.76, pay=4.47, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.12, pay=19.55, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.34,pay=20.94,role="targ", itemtype="urn"),comp = new makeOption(prob=0.96, pay=7.36, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.26, pay=20.94, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.57,pay=9.53,role="targ", itemtype="urn"),comp = new makeOption(prob=0.26, pay=20.94, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.5, pay=9.53, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.91,pay=5.42,role="targ", itemtype="urn"),comp = new makeOption(prob=0.27, pay=18.5, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.91, pay=1.14, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.13,pay=39.02,role="targ", itemtype="urn"),comp = new makeOption(prob=0.91, pay=5.42, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.04, pay=39.02, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.65,pay=8.1,role="targ", itemtype="urn"),comp = new makeOption(prob=0.87, pay=6.08, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.58, pay=8.1, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.63,pay=5.15,role="targ", itemtype="urn"),comp = new makeOption(prob=0.18, pay=18.13, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.63, pay=1.23, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.63,pay=4.91,role="targ", itemtype="urn"),comp = new makeOption(prob=0.05, pay=67.42, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.63, pay=1.23, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.11,pay=7.05,role="targ", itemtype="urn"),comp = new makeOption(prob=0.63, pay=1.23, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.11, pay=3.61, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.47,pay=14.72,role="targ", itemtype="urn"),comp = new makeOption(prob=0.96, pay=7.27, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.47, pay=10.09, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.85,pay=4.6,role="targ", itemtype="urn"),comp = new makeOption(prob=0.24, pay=16.06, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.79, pay=4.6, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.36,pay=3.56,role="targ", itemtype="urn"),comp = new makeOption(prob=0.72, pay=1.76, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.27, pay=3.56, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.36,pay=3.56,role="targ", itemtype="urn"),comp = new makeOption(prob=0.89, pay=1.43, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.36, pay=0.17, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.02,pay=3.76,role="targ", itemtype="urn"),comp = new makeOption(prob=0.36, pay=0.17, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.02, pay=0.4, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.09,pay=4.49,role="targ", itemtype="urn"),comp = new makeOption(prob=0.57, pay=0.73, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.01, pay=4.49, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.01,pay=4.49,role="targ", itemtype="urn"),comp = new makeOption(prob=0.54, pay=0.11, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.01, pay=0.14, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.16,pay=15.84,role="targ", itemtype="urn"),comp = new makeOption(prob=0.49, pay=5.23, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.08, pay=15.84, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.68,pay=6.27,role="targ", itemtype="urn"),comp = new makeOption(prob=0.09, pay=47.96, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.68, pay=2.79, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.56,pay=8.35,role="targ", itemtype="urn"),comp = new makeOption(prob=0.97, pay=4.84, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.47, pay=8.35, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.71,pay=6.59,role="targ", itemtype="urn"),comp = new makeOption(prob=0.97, pay=4.84, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.66, pay=6.59, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.15,pay=22.74,role="targ", itemtype="urn"),comp = new makeOption(prob=0.87, pay=3.88, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.15, pay=19.39, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.51,pay=9.28,role="targ", itemtype="urn"),comp = new makeOption(prob=0.86, pay=5.5, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.41, pay=9.28, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.77,pay=6.17,role="targ", itemtype="urn"),comp = new makeOption(prob=0.51, pay=9.28, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.71, pay=6.17, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.83,pay=1.56,role="targ", itemtype="urn"),comp = new makeOption(prob=0.13, pay=10.11, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.75, pay=1.56, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.3,pay=21.6,role="targ", itemtype="urn"),comp = new makeOption(prob=0.87, pay=7.3, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.3, pay=16.99, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.3,pay=21.59,role="targ", itemtype="urn"),comp = new makeOption(prob=0.93, pay=6.88, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.3, pay=16.99, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.69,pay=2.95,role="targ", itemtype="urn"),comp = new makeOption(prob=0.1, pay=20.42, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.59, pay=2.95, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.1,pay=20.42,role="targ", itemtype="urn"),comp = new makeOption(prob=0.89, pay=2.3, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.1, pay=15.78, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.52,pay=3.96,role="targ", itemtype="urn"),comp = new makeOption(prob=0.1, pay=20.42, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.52, pay=0.5, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.47,pay=19.3,role="targ", itemtype="urn"),comp = new makeOption(prob=0.15, pay=59.72, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.42, pay=19.3, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.21,pay=59.72,role="targ", itemtype="urn"),comp = new makeOption(prob=0.97, pay=12.96, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.15, pay=59.72, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
,
new makeTrial(targ = new makeOption(prob=0.97,pay=12.96,role="targ", itemtype="urn"),comp = new makeOption(prob=0.59, pay=21.52, role="comp", itemtype="urn"),decoy = new makeOption(prob=0.92, pay=12.96, role="decoy", itemtype="urn"), bg = "urn",shuffle([0,1,2]))
]
