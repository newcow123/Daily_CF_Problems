let records = `
current_date:2024-09-19
hum:2,64/1,1/2,6/1,1/2,5/1,1/2,19/1,1/2,3/1,1/2,17/1,1/2,5/1,1/2,3/1,3/2,7/1,1/2,1/0,1/2,4/1,3/2,3/1,4/2,2/0,1/2,2/1,1/2,1/0,1/1,1/2,1/0,2/1,1/2,3/1,2/2,2/1,2
tsreaper:2,178
lengli:2,158/1,1/2,19
sugar:1,1/0,177
lyxxys:1,1/0,50/2,3/1,1/2,9/1,2/2,1/1,2/2,1/1,1/2,11/1,1/2,5/1,1/2,1/1,1/2,25/1,1/2,32/1,1/2,5/1,2/2,4/1,1/2,5/1,1/2,1/0,1/2,3/1,1/2,3/1,1
mikeac:2,27/0,3/2,7/0,5/2,1/0,5/2,3/0,2/2,1/0,6/2,4/0,114
ncf:1,15/0,3/1,48/2,1/1,6/2,1/1,5/2,1/1,6/2,1/1,28/2,1/1,4/2,2/1,5/2,1/0,1/1,3/2,1/1,4/0,1/1,10/0,30
yawn_sean:2,178
grobycn:1,3/2,2/1,1/2,45/1,1/2,1/1,1/2,4/1,1/2,1/1,2/2,1/1,6/2,1/1,1/0,1/2,2/1,2/2,3/1,3/2,1/1,1/2,1/0,1/2,1/0,1/2,5/1,1/2,4/0,1/2,1/0,1/1,1/2,1/1,1/2,2/1,3/2,1/1,1/2,1/1,9/2,1/1,1/2,1/1,2/2,1/1,2/0,2/1,1/2,2/1,2/2,1/1,2/0,1/1,1/0,11/1,9/0,1/2,2/1,1/2,1/0,2/1,3/0,1/1,1/0,1/1,1/2,3
tauros:2,54/0,124
leoncn:1,1/2,1/1,1/2,2/1,1/2,3/1,4/2,1/1,1/2,11/1,4/2,3/1,2/2,2/1,2/2,1/1,2/2,4/1,2/2,7/1,1/2,2/1,1/2,4/1,5/2,1/1,1/2,1/1,7/2,5/1,1/2,3/1,3/2,3/1,1/2,11/1,1/2,1/1,1/2,2/1,10/2,4/1,1/2,5/1,21/2,1/1,19/2,7
md:1,2/0,2/1,2/0,3/1,6/2,8/1,1/2,3/1,3/2,20/1,1/2,1/1,2/2,4/1,1/2,5/1,1/2,6/1,1/2,3/1,1/2,1/1,1/2,3/1,3/2,5/1,1/2,5/1,1/2,1/1,5/2,1/1,1/2,1/1,3/2,1/1,1/2,1/1,1/2,4/1,4/2,4/1,20/0,1/1,2/0,1/1,27/0,1/1,2
retyrn:1,1/2,3/1,3/2,1/1,2/2,1/1,1/2,2/1,1/2,3/1,1/2,3/1,2/2,3/1,1/2,1/1,1/2,3/1,2/2,3/1,1/2,1/1,2/2,5/1,1/2,5/1,1/2,4/1,1/2,5/1,1/2,6/1,1/2,5/1,1/2,23/1,1/2,5/1,1/2,22/1,1/2,1/0,1/2,33/1,1/2,11
k423:2,1/0,1/2,1/0,3/2,4/0,1/2,63/0,103
linxiaotian:2,3/0,6/1,1/0,2/2,1/1,1/2,2/0,4/2,1/1,2/2,2/0,2/1,1/0,3/2,1/0,145
cc4414:1,1/2,3/1,1/0,44/1,1/0,11/1,1/0,2/1,1/2,2/0,3/1,1/0,4/1,1/0,8/2,1/1,1/0,1/1,2/2,1/1,4/2,1/0,8/2,1/0,73
jinyumantang:1,2/0,62/2,2/0,19/1,1/0,38/1,2/0,19/1,1/0,30
leander:1,1/0,1/1,2/2,1/0,14/2,1/0,156
dinghc:1,4/2,3/1,3/2,1/1,2/2,1/1,3/2,1/1,3/2,1/0,1/2,2/1,3/2,2/1,1/2,1/1,2/2,3/1,4/2,2/1,1/2,2/1,1/2,1/0,1/1,4/0,2/1,3/0,1/1,5/0,5/1,1/0,3/1,3/0,4/1,2/0,2/1,2/0,4/1,1/0,1/1,4/0,1/1,3/0,5/1,1/0,2/2,1/1,2/2,1/0,1/1,1/2,1/1,3/0,2/1,4/0,5/1,1/0,2/1,1/0,1/1,2/0,1/1,1/0,1/1,3/0,2/1,2/2,2/0,1/1,4/0,5/1,3/0,2/1,4/0,3/1,2/0,1/1,2/0,1
arrogant_sword:1,4/2,1/1,1/2,1/1,2/2,1/1,3/0,1/1,1/2,1/1,2/2,1/1,6/0,21/2,4/1,3/2,3/1,1/2,1/1,1/2,1/1,3/0,1/2,1/0,1/2,1/0,2/1,1/2,1/1,1/2,1/0,8/1,1/2,1/1,1/2,9/1,1/2,7/1,1/2,1/1,1/0,2/2,3/0,5/2,2/0,2/2,1/0,57
aging1986:1,1/0,62/2,2/0,110
hongrock:2,1/0,5/2,5/1,1/2,13/0,150
test:1,1/0,174
cpchenpi:1,1/0,173
jie_chen:1,1/0,171
retyn:1,1/0,171
rememorio:1,2/0,168
jokemaker:1,1/0,1/1,3/0,9/1,1/0,155
yefei162:1,1/0,10/2,1/1,2/0,1/1,1/2,2/1,17/2,1/1,4/2,1/1,4/0,1/1,3/2,1/1,1/2,1/1,6/2,1/1,1/2,1/1,1/2,1/1,5/2,1/1,8/2,2/1,2/2,1/1,6/2,2/1,4/2,1/1,7/0,2/1,5/2,2/1,6/0,1/1,2/0,8/1,1/0,2/1,1/0,38
yangsisi:1,1/0,53/1,1/0,115
fatalerror:1,1/0,20/2,4/1,2/2,4/1,1/0,1/2,3/0,3/2,2/0,1/2,2/1,1/2,6/0,6/2,4/0,2/2,1/0,16/2,2/0,11/2,2/0,9/2,1/0,9/2,1/0,4/2,1/0,2/2,1/0,3/2,1/0,14/2,1/0,6/2,3/0,18
ynotbbetter:2,15/0,153
gh123:1,2/0,2/1,1/0,5/1,1/0,1/1,1/0,2/1,2/0,2/1,1/0,2/1,2/0,1/1,3/0,3/1,1/0,2/1,1/0,1/1,1/0,2/1,1/0,1/1,2/0,1/1,3/0,1/1,1/0,1/1,4/0,4/1,5/0,1/1,1/0,1/1,1/0,2/1,1/0,1/1,1/0,6/1,1/0,1/1,5/0,1/1,1/0,2/1,1/0,3/1,4/0,2/1,1/0,2/1,1/0,3/1,1/0,10/1,1/0,1/1,2/0,2/1,1/0,1/1,2/0,2/1,4/0,2/1,1/0,2/1,1/0,8/1,1/0,1/1,2/0,2/1,4/0,2/1,4/0,3/1,1
sheepstick:2,54/0,15/2,9/0,88
nreyog:1,1/0,7/1,1/0,12/1,1/0,144
iron_buster:1,1/0,13/1,2/0,24/1,1/0,24/1,1/0,22/1,1/0,12/1,1/0,64
ggl:1,1/0,8/1,1/0,16/1,2/0,54/1,1/0,45/1,1/0,37
ku:1,2/0,1/1,9/0,1/1,3/0,3/1,3/0,1/1,1/0,1/1,2/0,10/1,1/0,5/1,1/0,1/1,2/0,7/1,2/0,12/1,2/0,10/1,1/0,4/1,1/0,1/1,3/0,1/2,1/1,2/0,4/1,1/0,1/1,1/0,5/1,1/0,1/1,1/2,1/0,1/1,2/0,5/1,1/0,3/1,1/0,28/1,4/0,5/1,1/0,5
harmonly:1,2/0,1/1,1/0,1/2,2/1,1/0,1/1,1/0,14/1,1/0,2/1,1/0,13/1,1/0,5/1,1/0,118
windly:1,4/2,2/1,11/2,1/1,5/0,142
djl777:2,1/0,4/2,1/0,83/2,1/0,5/2,1/0,35/2,2/0,4/2,1/0,5/2,1/0,21
toc:1,1/0,1/1,1/0,1/1,2/0,1/1,3/0,1/1,1/0,1/1,4/2,1/1,2/0,3/1,19/0,1/1,5/0,1/1,2/0,1/1,1/0,3/1,10/0,1/1,1/0,1/1,14/0,1/1,11/0,70
inhng:1,2/2,1/0,1/1,73/2,1/1,16/2,1/1,29/0,40
yss:1,1/0,163
deckedge:1,1/0,11/1,1/0,2/2,2/0,2/1,1/0,1/1,4/0,2/1,1/2,1/1,2/2,1/0,1/1,3/2,1/1,1/0,1/1,1/2,1/1,1/2,2/1,1/2,4/1,2/2,5/1,3/2,1/1,3/2,3/1,1/0,10/2,3/0,2/1,1/2,1/1,2/0,1/1,1/0,1/1,2/0,2/1,1/0,1/2,1/1,2/0,5/1,1/0,3/1,2/0,3/1,1/0,2/1,1/0,2/1,2/0,1/1,1/0,4/1,1/0,4/1,3/0,1/1,2/0,2/1,1/0,23
sprite:1,1/0,4/2,1/1,2/0,1/2,1/0,1/1,3/0,1/2,1/1,5/2,2/1,3/0,1/1,5/0,1/1,2/0,1/1,1/0,126
ldh:2,10/0,3/2,2/0,72/2,6/0,68
wink:1,4/2,1/0,2/1,8/0,4/1,4/0,8/1,1/0,1/1,1/0,1/1,2/0,51/2,1/0,72
octal2024:2,1/0,1/1,2/0,156
dwq:1,2/0,1/1,4/0,1/1,2/0,2/1,5/0,1/1,4/0,2/1,4/0,1/1,9/0,4/1,3/0,115
pdocw:2,1/1,36/0,17/1,4/0,44/1,2/0,16/1,6/0,34
wanderovo:2,4/1,2/2,1/1,5/2,1/1,4/2,4/1,5/2,1/1,3/2,4/1,1/2,1/1,1/2,3/1,1/2,1/1,2/2,2/1,2/2,5/1,3/2,1/1,1/2,1/1,1/2,3/1,2/2,8/1,1/2,1/1,1/2,1/1,1/2,1/1,1/2,3/1,1/2,2/1,1/2,2/1,1/2,5/1,1/2,1/1,1/2,1/1,3/2,1/1,12/2,1/1,2/2,5/1,1/2,1/1,2/2,1/1,4/2,1/1,4/0,1/1,4/0,1/1,11/2,1/1,2/2,2/1,1
override:1,52/2,1/1,18/2,1/1,26/0,2/1,1/0,59
hang:1,115/0,1/1,23/0,1/1,20
wangggong:1,1/0,3/2,1/0,5/2,2/1,1/0,1/1,2/2,1/1,1/0,1/1,1/0,2/1,1/0,3/1,1/0,4/1,3/0,1/1,2/0,12/1,4/0,3/2,1/0,1/1,1/0,3/1,2/0,2/1,4/0,23/1,1/0,64
goodluck_ccq:1,2/0,1/2,1/0,153
yskm-an:1,1/0,1/1,10/2,1/1,3/0,139
ranzhi:1,1/0,4/1,2/0,1/1,1/0,1/1,1/0,13/1,3/0,1/1,1/2,1/1,5/2,1/1,1/0,3/1,2/0,1/1,5/0,2/1,1/0,37/1,3/0,3/1,8/0,52
hopeworse:2,8/1,2/2,11/1,1/2,5/1,2/2,1/0,123
dwq_n:1,1/0,152
550n:1,4/0,1/1,1/0,121/2,2/1,2/0,22
subcrip:2,1/0,147
anonymous:1,1/0,3/1,1/0,142
lu_xz:1,1/2,2/1,1/2,3/1,1/0,1/1,1/0,4/1,1/0,3/2,9/1,1/2,1/1,1/0,4/2,5/0,1/2,9/0,6/2,1/0,2/2,3/0,1/2,8/0,18/2,1/0,57
yakultgo:1,1/2,29/0,1/2,5/0,1/2,3/0,1/2,6/0,2/2,4/0,1/2,6/0,1/2,3/0,1/2,1/0,1/2,11/0,2/2,9/0,2/2,1/0,1/2,3/0,1/2,2/0,1/2,2/0,9/2,1/0,6/2,1/0,24
windj0y:2,1/0,5/2,10/1,2/2,4/1,1/2,4/1,3/2,1/1,3/2,1/1,4/0,1/1,1/0,3/1,1/0,97
shawnqiang:1,2/0,37/1,1/0,3/1,1/0,97
zhangk33:1,1/2,1/0,139
mymsx:1,1/0,5/1,1/0,1/1,2/0,1/1,1/0,1/1,1/0,1/1,2/0,123
mrsuns:2,3/1,1/2,3/1,1/2,7/1,1/2,1/1,1/2,1/0,3/1,1/2,2/1,1/0,2/1,1/2,4/0,3/2,1/0,5/2,2/0,3/1,1/0,30/1,2/0,20/2,1/0,1/2,1/0,1/2,2/0,6/2,2/1,1/0,25
liketheflower:2,7/1,6/2,1/1,6/0,120
buxiang-qichuang:1,1/0,17/1,2/0,2/1,3/0,113
buxiang_qichuang:1,1/0,137
jy_xiaoying:2,2/1,2/0,11/1,28/0,1/1,1/0,1/1,7/0,2/1,1/0,12/1,2/0,1/1,1/0,10/1,1/0,1/1,2/0,8/1,1/0,2/1,1/0,1/1,1/0,3/1,1/0,1/1,1/0,4/1,1/0,1/1,2/0,22
lang:1,1/0,134
absndon2:1,1/0,134
anandon2:1,1/0,42/1,1/0,91
xylu:2,2/1,1/0,1/2,2/1,6/2,1/1,1/2,1/1,1/2,5/1,1/2,11/1,1/2,7/1,3/2,4/1,1/0,3/2,1/1,1/2,4/0,76
qiuuuuut:1,1/0,133
abandon2:2,13/1,1/0,1/2,7/1,1/2,4/0,1/2,5/0,1/1,1/2,3/1,1/0,1/2,2/1,1/2,2/0,1/2,1/1,1/2,1/1,1/2,1/0,1/1,2/2,2/0,4/2,2/1,1/2,8/0,11/2,4/1,2/2,1/0,45
qiuuuuuut:1,1/0,39/2,1/1,1/2,1/0,1/2,2/1,1/2,2/0,2/2,1/1,1/0,79
1zhao:2,1/1,1/2,1/1,1/2,2/0,37/1,1/0,35/1,1/2,2/1,4/0,4/1,1/0,13/2,1/0,2/1,2/0,23
yoonsica:2,6/0,63/2,2/0,1/2,2/1,1/0,3/2,4/1,1/0,1/2,1/0,45
smallboatc:2,1/1,1/0,2/1,2/0,87/1,1/0,36
amani:1,1/0,2/1,3/2,1/0,1/1,4/0,1/1,1/0,2/1,3/0,1/1,1/0,1/1,2/0,2/1,1/0,1/1,2/2,1/1,5/0,2/1,4/0,1/2,1/1,4/0,17/1,1/0,64
equinox:1,4/2,3/0,4/2,5/0,14/2,2/1,1/2,1/0,2/2,12/1,3/2,1/1,2/0,7/2,2/0,1/2,1/0,1/2,12/1,1/2,3/1,1/0,1/2,12/0,1/2,1/0,1/2,1/0,3/2,10/0,1/2,1/0,1/2,1/0,1/1,1/2,3/0,1/2,3/0,1/2,2/0,1
sjw712:2,2/0,101/2,10/1,1/2,16
cat丶:1,3/0,126
zongjy:2,3/1,2/2,1/1,1/2,1/0,1/1,1/2,4/0,3/2,1/1,1/2,1/0,109
empty_dust:2,3/0,11/2,1/1,1/0,1/2,1/0,1/1,1/0,108
octal:1,1/0,35/2,1/1,2/0,89
baozii:1,4/0,21/2,1/0,3/1,4/2,1/1,2/2,5/1,1/2,1/1,2/0,31/1,1/0,50
kokomi:2,1/1,1/2,2/1,1/2,1/0,2/2,4/1,1/0,1/2,1/0,35/2,1/1,2/0,73
baile:1,3/0,7/1,1/0,2/1,2/0,1/1,1/0,2/1,1/0,4/1,2/0,100
lu1no:2,1/0,35/1,1/2,1/0,44/2,2/1,4/0,38
little_j:1,1/0,125
minsongkang1:1,1/0,124
luchy0120:2,11/1,2/2,9/1,1/2,1/1,1/0,100
rui_er:2,12/0,112
lyxxyx:1,1/0,123
pandaomeng:1,1/0,1/1,1/2,1/1,1/0,1/1,4/0,13/1,1/0,100
djzzwx:1,1/2,1/0,4/2,4/1,2/2,3/1,1/2,1/0,1/2,3/0,3/2,3/0,3/2,1/0,1/2,3/0,2/2,1/0,4/2,1/1,1/2,1/0,79
if:1,16/2,1/1,31/0,72/1,1/2,1/1,2
lxcxz:1,1/0,25/1,1/0,97
37:1,1/0,8/1,1/0,21/1,1/0,91
zone:2,1/0,1/1,1/0,2/2,4/1,2/2,1/1,1/2,3/1,1/2,1/1,3/2,1/1,1/2,4/1,2/0,2/2,1/1,2/2,1/1,3/0,4/2,4/1,1/0,5/1,1/0,4/1,1/0,25/2,1/0,21/2,1/0,1/2,2/0,1/2,1/0,4/2,2/0,1/2,4/0,1
y_hc:1,3/0,3/1,1/0,48/1,1/0,64/1,1/0,2
slashteen:1,5/0,67/1,1/0,50
brusgry:2,1/0,121
banfenhaochi:1,2/0,34/1,1/0,5/1,1/0,5/1,1/0,5/1,2/0,64
rainmemery:1,1/0,118
pandoameng:1,1/0,118
xyz_herry:1,2/0,2/1,3/0,14/1,1/0,97
dawnmagnet:2,1/0,6/2,2/0,46/2,1/0,9/2,1/0,10/2,1/0,41
lazysheep:1,11/0,37/1,1/0,5/1,1/0,23/2,1/0,1/1,2/0,20/1,2/0,14
buer:1,1/2,1/1,1/2,1/1,1/0,1/2,3/1,1/2,1/1,1/0,1/2,3/0,9/2,3/0,1/1,3/0,5/2,1/1,3/0,66/1,1/0,10
kangminsong0:1,1/0,1/1,1/0,114
limerence:1,1/2,2/1,1/2,2/0,1/1,1/0,2/1,1/0,1/1,1/0,1/1,2/0,1/1,1/0,1/1,1/0,4/1,1/0,88
cming:2,2/0,22/1,1/0,87
pangyou3s:1,1/0,110
jerry66:2,1/0,11/2,1/0,4/2,2/0,4/2,1/0,10/2,1/0,16/1,1/0,58
lengnian7:1,1/0,5/1,1/2,2/0,97
openmi:1,6/0,1/1,9/0,17/1,4/2,2/1,4/0,6/1,15/2,1/1,6/0,15/1,1/0,19
kurtis:2,3/1,9/2,1/1,1/0,2/1,1/2,2/0,2/1,2/2,2/1,12/2,5/1,6/0,58
echo:1,2/0,1/1,2/0,16/1,1/0,83
rocky:2,2/0,103
cxhscst2:2,3/0,1/2,3/1,1/2,1/1,3/2,1/1,6/0,34/1,1/0,50
dijs_sdd:1,4/0,6/1,1/0,1/1,1/0,2/1,1/0,4/1,1/0,2/1,1/0,24/1,1/0,52
sigma-yyf:2,1/1,1/0,2/1,1/0,8/1,2/0,3/2,2/1,1/0,1/1,1/0,2/1,1/0,74
yrlpiao:2,1/1,2/2,8/1,1/2,2/1,1/0,1/2,1/0,2/2,1/0,1/1,1/0,2/1,1/0,1/1,1/0,7/1,1/0,4/1,1/0,5/1,1/0,5/2,2/1,1/0,9/2,4/0,33
lengnian:1,1/0,12/2,11/0,3/2,1/0,9/2,2/0,1/2,4/1,1/2,1/0,1/2,2/1,1/2,3/1,2/2,1/1,2/2,6/1,1/2,3/1,2/2,1/1,2/2,1/0,1/2,5/1,1/2,1/0,2/2,1/1,1/2,2/1,2/2,1/1,1/2,4/0,4
eunoiay:2,3/1,2/0,10/1,1/0,7/2,1/0,69
ran_zhi:1,1/0,1/1,4/2,1/1,1/0,3/1,1/0,1/1,2/0,77
xuwuze:1,2/0,87
tiger2005:2,70/0,18
zazhiii:1,2/0,53/1,2/0,27
lettera:1,2/2,1/1,3/0,15/1,1/2,1/1,3/2,2/0,3/1,1/0,2/1,1/0,1/1,6/0,2/1,1/2,1/1,1/2,2/0,2/1,4/0,2/2,1/1,1/2,1/1,1/0,1/1,3/2,1/0,1/1,1/0,3/1,1/0,1/1,1/0,2/2,2/1,1/0,1/2,1/0,1/2,2
metal_frog:1,1/0,30/2,9/1,1/2,23/0,1/2,1/1,1/2,7/1,4/0,5
zyc:1,1/0,80
alwaysce:1,1/2,1/1,3/2,1/1,2/2,1/1,2/2,3/1,1/2,5/1,1/2,1/1,1/2,5/1,1/2,1/0,5/2,4/1,2/2,11/1,1/2,11/1,1/2,4/1,1/2,11
sjohn:2,3/0,78
meikisisui:1,4/0,2/1,1/0,1/1,1/0,3/1,1/0,3/1,1/0,2/1,2/0,2/1,2/0,5/1,1/0,1/1,1/0,2/2,1/1,3/0,2/1,3/2,1/0,1/1,1/2,1/1,4/2,2/1,7/2,2/1,1/2,4/1,4/2,3/1,1/2,1/0,3
deemo_ml:1,7/0,73
dbwglx:1,1/0,79
kamtuo:2,30/1,1/2,16/0,1/1,1/2,4/0,1/2,5/0,1/2,5/0,1/1,1/0,1/2,4/1,1/2,3
kod:1,2/0,2/1,1/0,3/1,1/0,3/1,1/0,15/1,1/0,1/1,2/0,23/2,1/0,18
lyongwolf:1,1/0,1/1,1/2,4/1,10/0,5/1,1/0,2/1,1/0,47
liryc:1,16/2,2/1,6/2,1/1,6/2,1/1,1/2,1/1,26/2,1/1,5/0,1/1,2/2,1/1,3
arrogant_sword,cpp:1,1/0,72
kita_ikuyo:2,1/0,1/1,2/0,38/2,1/1,1/2,1/0,25
sbjohn:2,1/0,1/2,1/0,10/2,2/0,4/2,1/0,1/2,1/0,1/1,1/0,44
yefei:1,1/0,67
bond_james:1,1/2,3/0,10/1,2/0,3/1,1/0,2/1,1/0,1/1,1/0,4/1,1/0,35
crzhou:1,1/0,1/2,1/0,3/2,9/0,3/1,1/0,1/2,4/0,7/1,1/2,1/1,1/0,2/2,2/0,3/1,1/0,20/2,2
fancyalad:1,4/0,2/1,1/0,1/1,2/0,5/1,1/0,40
xzx:1,4/0,1/1,1/0,47
catchfree1225:2,5/1,1/2,2/1,1/2,1/1,1/0,2/2,4/1,1/2,2/1,4/2,2/1,4/2,2/1,10/2,1/0,1/1,5/0,3
mono_4:1,1/0,1/1,1/0,8/1,1/0,40
kamito:1,8/0,44
lengian:1,1/0,14/1,1/0,35
jun:2,1/0,49
innerworldexplorer:2,1/0,1/1,10/2,2/1,19/2,1/1,4/2,2/1,3/2,1/1,2
legnian:1,1/0,43
zrnstnsr:2,12/1,1/2,1/0,1/2,10/1,2/2,6/0,2/1,1/2,1/1,1/0,5
yunc:1,1/0,41
xiaoretaw:2,6/0,1/2,1/0,2/1,1/0,29
boulimhh:1,23/0,1/1,13/0,1/1,1
humn:1,1/0,36
sdjasj:1,3/0,7/2,1/1,1/0,25
zrnstnr:1,1/0,30
crzhou,py:1,1/0,30
stcnpc:1,3/0,2/1,1/0,6/1,1/0,18
kmiao:1,2/2,1/0,2/2,1/0,1/1,1/0,8/1,1/0,13
wanerovo:1,1/0,22
jackeyhua:1,2/2,1/1,5/0,15
yuexihuachen:1,1/0,5/1,2/0,13
bonelight:1,1/2,8/1,1/2,10
metal_grog:1,1/0,18
_boulimhh:1,1/0,15
javaminus:1,2/2,1/1,2/2,1/1,1/2,2/1,6
artoor:1,1/0,14
lettear:1,1/0,11
gaoeight:2,1/1,1/0,1/2,1/1,4/0,1/1,1
juyou:1,1/0,8
yui:1,4
helltractor:2,2
skipped_dates:y2024,m3,0310172431,m4,07142128,m5,05121926,m6,0209162330,m7,07142128,m8,04111825,m9,010815
`;
