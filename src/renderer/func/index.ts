import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
// func/index.ts
export {makepal} from "../func/func000"
export {imeget} from "../func/func000"
export {imeset} from "../func/func000"

// export {func004} from "../func/func004" Ver0.1406にて ../newdtw/initializeへ移動
// export {func005} from "../func/func005" Ver0.1406にて ../newdtw/loadへ移動
// export {func006} from "../func/func006" Ver0.1406にて ../newdtw/loadへ移動
// export {func007} from "../func/func007" Ver0.1406にて ../newdtw/loadへ移動
// export {func008} from "../func/func008" Ver0.1406にて ../newdtw/loadへ移動
// export {func009} from "../func/func009" Ver0.1406にて ../newdtw/main_loopへ移動
// export {func010} from "../func/func010" Ver0.1406にて ../newdtw/vectorへ移動
// export {func011} from "../func/func011" Ver0.1406にて ../newdtw/vectorへ移動
// export {func012} from "../func/func012" Ver0.1406にて ../newdtw/vectorへ移動
// export {func013} from "../func/func013" Ver0.1406にて ../newdtw/vectorへ移動
// export {func014} from "../func/func014" Ver0.1406にて ../newdtw/vectorへ移動
// export {func015} from "../func/func015" Ver0.1406にて ../newdtw/vectorへ移動
// export {func016} from "../func/func016" Ver0.1406にて ../newdtw/vectorへ移動
// export {func017} from "../func/func017" Ver0.1406にて ../newdtw/vectorへ移動
// export {func018} from "../func/func018" Ver0.1406にて ../newdtw/vectorへ移動
// export {func019} from "../func/func019" Ver0.1406にて ../newdtw/flagへ移動
// export {func020} from "../func/func020" Ver0.1406にて ../newdtw/flagへ移動
// export {func021} from "../func/func021" Ver0.1406にて ../newdtw/effectsへ移動
// export {func022} from "../func/func022" Ver0.1406にて ../newdtw/effectsへ移動
// export {func023} from "../func/func023" Ver0.1406にて ../newdtw/effectsへ移動
// export {func024} from "../func/func024" Ver0.1406にて ../newdtw/effectsへ移動
// export {func025} from "../func/func025" Ver0.1406にて ../newdtw/effectsへ移動
// export {func026} from "../func/func026" Ver0.1406にて ../newdtw/effectsへ移動
// export {func027} from "../func/func027" Ver0.1406にて ../newdtw/effectsへ移動
// export {func028} from "../func/func028" Ver0.1406にて ../newdtw/effectsへ移動
// export {func029} from "../func/func029" Ver0.1406にて ../newdtw/effectsへ移動
// export {func030} from "../func/func030" Ver0.1406にて ../newdtw/effectsへ移動
// export {func031} from "../func/func031" Ver0.1406にて ../memory/item580へ移動
// export {func032} from "../func/func032" Ver0.1406にて ../stand/item108へ移動
// export {func033} from "../func/func033" Ver0.1406にて ../stand/item108へ移動
// export {func034} from "../func/func034" Ver0.1406にて ../newdtw/effectsへ移動
// export {func035} from "../func/func035" Ver0.1406にて ../newdtw/effectsへ移動
// export {func036} from "../func/func036" Ver0.1406にて ../newdtw/effectsへ移動
// export {func037} from "../func/func037" Ver0.1406にて ../newdtw/effectsへ移動
// export {func038} from "../func/func038" Ver0.1406にて ../newdtw/effectsへ移動
// export {func039} from "../func/func039" Ver0.1406にて ../newdtw/effectsへ移動
// export {func040} from "../func/func040" Ver0.1406にて ../newdtw/effectsへ移動
// export {func041} from "../func/func041" Ver0.1406にて ../memory/item580へ移動
// export {func042} from "../func/func042" Ver0.1406にて ../memory/item580へ移動
// export {func043} from "../func/func043" Ver0.1406にて ../stand/item396へ移動
export {func044} from "../func/func044"
export {func045} from "../func/func045"
export {func046} from "../func/func046"
export {func047} from "../func/func047"
export {func048} from "../func/func048"
export {func049} from "../func/func049"
export {func050} from "../func/func050"
export {func051} from "../func/func051"
export {func052} from "../func/func052"
export {func053} from "../func/func053"
export {func054} from "../func/func054"
export {func055} from "../func/func055"
export {func056} from "../func/func056"
export {func057} from "../func/func057"
export {func058} from "../func/func058"
// export {func059} from "../func/func059" Ver0.1406にて ../dungeon/dungeon1へ移動
export {func060} from "../func/func060"
export {func061} from "../func/func061"
export {func062} from "../func/func062"
export {func063} from "../func/func063"
export {func064} from "../func/func064"
// export {func065} from "../func/func065" Ver0.1406にて ../dungeon/dungeon0/turtleへ移動
// export {func066} from "../func/func066" Ver0.1406にて ../dungeon/dungeon0/turtleへ移動
// export {func067} from "../func/func067" Ver0.1406にて ../dungeon/dungeon0/turtleへ移動
export {func068} from "../func/func068"
export {func069} from "../func/func069"
export {func070} from "../func/func070"
export {func071} from "../func/func071"
export {func072} from "../func/func072"
export {func073} from "../func/func073"
export {func074} from "../func/func074"
export {func075} from "../func/func075"
export {func076} from "../func/func076"
export {func077} from "../func/func077"
export {func078} from "../func/func078"
export {func079} from "../func/func079"
export {func080} from "../func/func080"
export {func081} from "../func/func081"
export {func082} from "../func/func082"
export {func083} from "../func/func083"
export {func084} from "../func/func084"
export {func085} from "../func/func085"
export {func086} from "../func/func086"
export {func087} from "../func/func087"
export {func088} from "../func/func088"
export {func089} from "../func/func089"
export {func090} from "../func/func090"
export {func091} from "../func/func091"
export {func092} from "../func/func092"
export {func093} from "../func/func093"
export {func094} from "../func/func094"
export {func095} from "../func/func095"
export {func096} from "../func/func096"
export {func097} from "../func/func097"
export {func098} from "../func/func098"
export {func099} from "../func/func099"
export {func100} from "../func/func100"
export {func101} from "../func/func101"
export {func102} from "../func/func102"
export {func103} from "../func/func103"
export {func104} from "../func/func104"
export {func105} from "../func/func105"
export {func106} from "../func/func106"
export {func107} from "../func/func107"
export {func108} from "../func/func108"
export {func109} from "../func/func109"
export {func110} from "../func/func110"
export {func111} from "../func/func111"
export {func112} from "../func/func112"
// export {func113} from "../func/func113" Ver0.1406にて ../dungeon/dungeon0/hotelへ移動
// export {func114} from "../func/func114" Ver0.1406にて ../dungeon/dungeon0/turtleへ移動
// export {func114b} from "../func/func114b" Ver0.1406にて ../dungeon/dungeon0/barへ移動
export {func115} from "../func/func115"
export {func116} from "../func/func116"
export {func117} from "../func/func117"
export {func118} from "../func/func118"
export {func119} from "../func/func119"
export {func120} from "../func/func120"
export {func121} from "../func/func121"
export {func122} from "../func/func122"
export {func123} from "../func/func123"
export {func124} from "../func/func124"
export {func125} from "../func/func125"
export {func126} from "../func/func126"
export {func127} from "../func/func127"
export {func128} from "../func/func128"
export {func129} from "../func/func129"
export {func130} from "../func/func130"
export {func131} from "../func/func131"
export {func132} from "../func/func132"
export {func133} from "../func/func133"
export {func134} from "../func/func134"
export {func135} from "../func/func135"
export {func136} from "../func/func136"
export {func137} from "../func/func137"
export {func138} from "../func/func138"
// export {func139} from "../func/func139" Ver0.1406にて ../newdtw/loginへ移動
// export {func140} from "../func/func140" Ver0.1406にて ../newdtw/loginへ移動
// export {func141} from "../func/func141" Ver0.1406にて ../newdtw/loginへ移動
// export {func142} from "../func/func142" Ver0.1406にて ../newdtw/loginへ移動
// export {func143} from "../func/func143" Ver0.1406にて ../newdtw/loginへ移動
// export {func144} from "../func/func144" Ver0.1406にて ../newdtw/loginへ移動
// export {func145} from "../func/func145" Ver0.1406にて ../newdtw/loginへ移動
// export {func146} from "../func/func146" Ver0.1406にて ../newdtw/loginへ移動
// export {func147} from "../func/func147" Ver0.1406にて ../newdtw/loginへ移動
// export {func148} from "../func/func148" Ver0.1406にて ../newdtw/loginへ移動
// export {func149} from "../func/func149" Ver0.1406にて ../newdtw/loginへ移動
// export {func150} from "../func/func150" Ver0.1406にて ../events/events001へ移動
// export {func151} from "../func/func151" Ver0.1406にて ../events/events002へ移動
// export {func152} from "../func/func152" Ver0.1406にて ../events/events003へ移動
// export {func153} from "../func/func153" Ver0.1406にて ../events/events005へ移動
// export {func154} from "../func/func154" Ver0.1406にて ../events/events006へ移動
// export {func155} from "../func/func155"  Ver0.1406にて ../events/events007へ移動
// export {func156} from "../func/func156" Ver0.1406にて ../events/events004へ移動
export {func157} from "../func/func157"
// export {func158} from "../func/func158" Ver0.1406にて ../events/events001へ移動
// export {func159} from "../func/func159" Ver0.1406にて ../dungeon/dungeon0/hotelへ移動
// export {func160} from "../func/func160" Ver0.1406にて ../dungeon/dungeon0/hotelへ移動
// export {func160b} from "../func/func160b" Ver0.1406にて ../dungeon/dungeon0/barへ移動
// export {func161} from "../func/func161" Ver0.1406にて ../dungeon/dungeon0/turtleへ移動
// export {func161a} from "../func/func161a" Ver0.1406にて ../dungeon/dungeon0/barへ移動
// export {func161b} from "../func/func161b" Ver0.1406にて ../dungeon/dungeon0/hotelへ移動
export {func162} from "../func/func162"
// export {func163} from "../func/func163" Ver0.1406にて ../dungeon/dungeon0/hotelへ移動
// export {func163b} from "../func/func163b" Ver0.1406にて ../dungeon/dungeon0/barへ移動
export {func164} from "../func/func164"
export {func165} from "../func/func165"
export {func166} from "../func/func166"
export {func167} from "../func/func167"
export {func168} from "../func/func168"
export {func169} from "../func/func169"
export {func170} from "../func/func170"
export {func171} from "../func/func171"
export {func172} from "../func/func172"
export {func173} from "../func/func173"
export {func174} from "../func/func174"
export {func175} from "../func/func175"
export {func176} from "../func/func176"
export {func177} from "../func/func177"
export {func178} from "../func/func178"
export {func179} from "../func/func179"
export {func180} from "../func/func180"
export {func181} from "../func/func181"
export {func182} from "../func/func182"
export {func183} from "../func/func183"
export {func184} from "../func/func184"
export {func185} from "../func/func185"
export {func186} from "../func/func186"
export {func187} from "../func/func187"
export {func188} from "../func/func188"
export {func189} from "../func/func189"
export {func190} from "../func/func190"
export {func191} from "../func/func191"
export {func192} from "../func/func192"
export {func193} from "../func/func193"
export {func194} from "../func/func194"
export {func195} from "../func/func195"
export {func196} from "../func/func196"
export {func197} from "../func/func197"
export {func198} from "../func/func198"
export {func199} from "../func/func199"
export {func200} from "../func/func200"
export {func201} from "../func/func201"
export {func202} from "../func/func202"
export {func203} from "../func/func203"
export {func204} from "../func/func204"
export {func205} from "../func/func205"
export {func206} from "../func/func206"
export {func207} from "../func/func207"
export {func208} from "../func/func208"
export {func209} from "../func/func209"
export {func210} from "../func/func210"
export {func211} from "../func/func211"
export {func212} from "../func/func212"
export {func213} from "../func/func213"
export {func214} from "../func/func214"
export {func215} from "../func/func215"
export {func216} from "../func/func216"
export {func217} from "../func/func217"
export {func218} from "../func/func218"
export {func219} from "../func/func219"
export {func220} from "../func/func220"
export {func221} from "../func/func221"
export {func222} from "../func/func222"
export {func223} from "../func/func223"
export {func224} from "../func/func224"
export {func225} from "../func/func225"
export {func226} from "../func/func226"
export {func227} from "../func/func227"
export {func228} from "../func/func228"
export {func229} from "../func/func229"
export {func230} from "../func/func230"
export {func231} from "../func/func231"
export {func232} from "../func/func232"
export {func233} from "../func/func233"
export {func234} from "../func/func234"
export {func235} from "../func/func235"
export {func236} from "../func/func236"
export {func237} from "../func/func237"
export {func238} from "../func/func238"
export {func239} from "../func/func239"
export {func240} from "../func/func240"
export {func241} from "../func/func241"
export {func242} from "../func/func242"
export {func243} from "../func/func243"
export {func244} from "../func/func244"
export {func245} from "../func/func245"
export {func246} from "../func/func246"
export {func247} from "../func/func247"
export {func248} from "../func/func248"
export {func249} from "../func/func249"
export {func250} from "../func/func250"
export {func251} from "../func/func251"
export {func252} from "../func/func252"
// export {func253} from "../func/func253" Ver0.1406にて ../newdtw/loadへ移動
export {func254} from "../func/func254"
export {func255} from "../func/func255"
export {func256} from "../func/func256"
export {func257} from "../func/func257"
export {func258} from "../func/func258"
export {func259} from "../func/func259"
export {func260} from "../func/func260"
export {func261} from "../func/func261"
export {func262} from "../func/func262"
export {func263} from "../func/func263"
export {func264} from "../func/func264"
export {func265} from "../func/func265"
export {func266} from "../func/func266"
export {func267} from "../func/func267"
export {func268} from "../func/func268"
export {func269} from "../func/func269"
export {func270} from "../func/func270"
export {func271} from "../func/func271"
export {func272} from "../func/func272"
export {func273} from "../func/func273"
export {func274} from "../func/func274"
export {func275} from "../func/func275"
export {func276} from "../func/func276"
export {func277} from "../func/func277"
export {func278} from "../func/func278"
export {func279} from "../func/func279"
export {func280} from "../func/func280"
export {func281} from "../func/func281"
export {func282} from "../func/func282"
export {func283} from "../func/func283"
export {func284} from "../func/func284"
export {func285} from "../func/func285"
export {func286} from "../func/func286"
export {func287} from "../func/func287"
// export {func288} from "../func/func288" Ver0.1406にて ../map/hotelへ移動
// export {func289} from "../func/func289" Ver0.1406にて ../map/hotelへ移動
// export {func290} from "../func/func290" Ver0.1406にて ../map/hotelへ移動
// export {func291} from "../func/func291" Ver0.1406にて ../map/hotelへ移動
// export {func292} from "../func/func292" Ver0.1406にて ../map/hotelへ移動
// export {func293} from "../func/func293" Ver0.1406にて ../map/map000へ移動
// export {func294} from "../func/func294" Ver0.1406にて ../map/map001へ移動
// export {func295} from "../func/func295" Ver0.1406にて ../map/map002へ移動
// export {func296} from "../func/func296" Ver0.1406にて ../map/map003へ移動
// export {func297} from "../func/func297" Ver0.1406にて ../map/map004へ移動
// export {func298} from "../func/func298" Ver0.1406にて ../map/map005へ移動
// export {func299} from "../func/func299" Ver0.1406にて ../map/map006へ移動
// export {func300} from "../func/func300" Ver0.1406にて ../map/map007へ移動
// export {func301} from "../func/func301" Ver0.1406にて ../map/map008へ移動
// export {func302} from "../func/func302" Ver0.1406にて ../map/map009へ移動
// export {func303} from "../func/func303" Ver0.1406にて ../map/map010へ移動
// export {func304} from "../func/func304" Ver0.1406にて ../map/map011へ移動
// export {func305} from "../func/func305" Ver0.1406にて ../map/map012へ移動
// export {func306} from "../func/func306" Ver0.1406にて ../map/map013へ移動
// export {func307} from "../func/func307" Ver0.1406にて ../map/map014へ移動
// export {func308} from "../func/func308" Ver0.1406にて ../map/map015へ移動
// export {func309} from "../func/func309" Ver0.1406にて ../map/map016へ移動
// export {func310} from "../func/func310" Ver0.1406にて ../map/map017へ移動
// export {func311} from "../func/func311" Ver0.1406にて ../map/map018へ移動
// export {func312} from "../func/func312" Ver0.1406にて ../map/map019へ移動
// export {func313} from "../func/func313" Ver0.1406にて ../map/map020へ移動
// export {func314} from "../func/func314" Ver0.1406にて ../map/map021へ移動
// export {func315} from "../func/func315" Ver0.1406にて ../map/map022へ移動
// export {func316} from "../func/func316" Ver0.1406にて ../map/map023へ移動
// export {func317} from "../func/func317" Ver0.1406にて ../map/map024へ移動
// export {func318} from "../func/func318" Ver0.1406にて ../map/map025へ移動
// export {func319} from "../func/func319" Ver0.1406にて ../map/map026へ移動
// export {func320} from "../func/func320" Ver0.1406にて ../map/map027へ移動
// export {func321} from "../func/func321" Ver0.1406にて ../map/map028へ移動
// export {func322} from "../func/func322" Ver0.1406にて ../map/map029へ移動
export {func323} from "../func/func323"
export {func324} from "../func/func324"
// export {func325} from "../func/func325" Ver0.1406にて ../stand/item116へ移動
export {func326} from "../func/func326"
export {func327} from "../func/func327"
export {func328} from "../func/func328"
export {func329} from "../func/func329"
export {func330} from "../func/func330"
export {func331} from "../func/func331"
export {func332} from "../func/func332"
export {func333} from "../func/func333"
export {func334} from "../func/func334"
export {func335} from "../func/func335"
export {func336} from "../func/func336"
export {func337} from "../func/func337"
export {func338} from "../func/func338"
export {func339} from "../func/func339"
export {func340} from "../func/func340"
export {func341} from "../func/func341"
export {func342} from "../func/func342"
export {func343} from "../func/func343"
export {func344} from "../func/func344"
export {func345} from "../func/func345"
export {func346} from "../func/func346"
export {func347} from "../func/func347"
export {func348} from "../func/func348"
export {func349} from "../func/func349"
export {func350} from "../func/func350"
export {func351} from "../func/func351"
export {func352} from "../func/func352"
export {func353} from "../func/func353"
export {func354} from "../func/func354"
export {func354X} from "../func/func354X"
export {func355} from "../func/func355"
export {func356} from "../func/func356"
export {func357} from "../func/func357"
export {func358} from "../func/func358"
export {func359} from "../func/func359"
export {func360} from "../func/func360"
export {func361} from "../func/func361"
export {func362} from "../func/func362"
export {func363} from "../func/func363"
export {func364} from "../func/func364"
export {func365} from "../func/func365"
export {func366} from "../func/func366"
export {func367} from "../func/func367"
export {func368} from "../func/func368"
export {func369} from "../func/func369"
export {func370} from "../func/func370"
export {func371} from "../func/func371"
export {func372} from "../func/func372"
export {func373} from "../func/func373"
export {func374} from "../func/func374"
export {func375} from "../func/func375"
export {func376} from "../func/func376"
export {func377} from "../func/func377"
export {func378} from "../func/func378"
export {func379} from "../func/func379"
export {func380} from "../func/func380"
export {func381} from "../func/func381"
export {func382} from "../func/func382"
export {func383} from "../func/func383"
export {func384} from "../func/func384"
export {func385} from "../func/func385"
export {func386} from "../func/func386"
export {func387} from "../func/func387"
export {func388} from "../func/func388"
export {func389} from "../func/func389"
export {func390} from "../func/func390"
export {func391} from "../func/func391"
export {func392} from "../func/func392"
export {func393} from "../func/func393"
export {func394} from "../func/func394"
export {func395} from "../func/func395"
export {func396} from "../func/func396"
export {func397} from "../func/func397"
export {func398} from "../func/func398"
export {func399} from "../func/func399"
export {func400} from "../func/func400"
export {func401} from "../func/func401"
export {func402} from "../func/func402"
export {func403} from "../func/func403"
export {func404} from "../func/func404"
export {func405} from "../func/func405"
export {func406} from "../func/func406"
export {func407} from "../func/func407"
export {func408} from "../func/func408"
export {func409} from "../func/func409"
export {func410} from "../func/func410"
export {func411} from "../func/func411"
export {func412} from "../func/func412"
export {func413} from "../func/func413"
export {func414} from "../func/func414"
export {func415} from "../func/func415"
export {func416} from "../func/func416"
export {func417} from "../func/func417"
// export {func418} from "../func/func418" Ver0.1406にて ../stand/item122へ移動
export {func419} from "../func/func419"
export {func420} from "../func/func420"
export {func421} from "../func/func421"
export {func422} from "../func/func422"
export {func423} from "../func/func423"
export {func424} from "../func/func424"
export {func425} from "../func/func425"
export {func426} from "../func/func426"
export {func427} from "../func/func427"
export {func428} from "../func/func428"
export {func429} from "../func/func429"
export {func430} from "../func/func430"
export {func431} from "../func/func431"
export {func432} from "../func/func432"
export {func433} from "../func/func433"
export {func434} from "../func/func434"
export {func435} from "../func/func435"
export {func436} from "../func/func436"
export {func437} from "../func/func437"
export {func438} from "../func/func438"
export {func439} from "../func/func439"
export {func440} from "../func/func440"
export {func441} from "../func/func441"
export {func442} from "../func/func442"
export {func443} from "../func/func443"
export {func444} from "../func/func444"
export {func445} from "../func/func445"
export {func446} from "../func/func446"
// export {func447} from "../func/func447" Ver0.1406にて ../extra_items/item723へ移動
// export {func448} from "../func/func448" Ver0.1406にて ../extra_items/item723へ移動
// export {func449} from "../func/func449" Ver0.1406にて ../extra_items/item723へ移動
// export {func450} from "../func/func450" Ver0.1406にて ../extra_items/item723へ移動
// export {func451} from "../func/func451" Ver0.1406にて ../extra_items/item723へ移動
// export {func452} from "../func/func452" Ver0.1406にて ../extra_items/item723へ移動
// export {func453} from "../func/func453" Ver0.1406にて ../extra_items/item723へ移動
// export {func454} from "../func/func454" Ver0.1406にて ../extra_items/item723へ移動
// export {func455} from "../func/func455" Ver0.1406にて ../extra_items/item723へ移動
// export {func456} from "../func/func456" Ver0.1406にて ../extra_items/item723へ移動
// export {func457} from "../func/func457" Ver0.1406にて ../extra_items/item723へ移動
export {func458} from "../func/func458"
export {func459} from "../func/func459"
export {func460} from "../func/func460"
export {func461} from "../func/func461"
export {func462} from "../func/func462"
export {func463} from "../func/func463"
export {func464} from "../func/func464"
export {func465} from "../func/func465"
export {func466} from "../func/func466"
export {func467} from "../func/func467"
export {func468} from "../func/func468"
export {func469} from "../func/func469"
export {func470} from "../func/func470"
export {func471} from "../func/func471"
export {func472} from "../func/func472"
export {func473} from "../func/func473"
export {func474} from "../func/func474"
export {func475} from "../func/func475"
export {func476} from "../func/func476"
export {func477} from "../func/func477"
export {func478} from "../func/func478"
export {func479} from "../func/func479"
export {func480} from "../func/func480"
export {func481} from "../func/func481"
export {func482} from "../func/func482"
export {func483} from "../func/func483"
export {func484} from "../func/func484"
export {func485} from "../func/func485"
export {func486} from "../func/func486"
export {func487} from "../func/func487"
export {func488} from "../func/func488"
export {func489} from "../func/func489"
export {func490} from "../func/func490"
export {func491} from "../func/func491"
export {func492} from "../func/func492"
export {func493} from "../func/func493"
export {func494} from "../func/func494"
export {func495} from "../func/func495"
export {func496} from "../func/func496"
export {func497} from "../func/func497"
export {func498} from "../func/func498"
export {func499} from "../func/func499"
export {func500} from "../func/func500"
export {func501} from "../func/func501"
export {func502} from "../func/func502"
export {func503} from "../func/func503"
export {func504} from "../func/func504"
export {func505} from "../func/func505"
export {func506} from "../func/func506"
export {func507} from "../func/func507"
export {func508} from "../func/func508"
export {func509} from "../func/func509"
export {func510} from "../func/func510"
export {func511} from "../func/func511"
export {func512} from "../func/func512"
export {func513} from "../func/func513"
export {func514} from "../func/func514"
export {func515} from "../func/func515"
export {func516} from "../func/func516"
export {func517} from "../func/func517"
export {func518} from "../func/func518"
export {func519} from "../func/func519"
export {func520} from "../func/func520"
export {func521} from "../func/func521"
// export {func522} from "../func/func522" Ver0.1406にて ../stand/item106へ移動
// export {func523} from "../func/func523" Ver0.1406にて ../stand/item106へ移動
// export {func524} from "../func/func524" Ver0.1406にて ../stand/item403へ移動
// export {func525} from "../func/func525" Ver0.1406にて ../stand/item319へ移動
// export {func526} from "../func/func526" Ver0.1406にて ../stand/item319へ移動
// export {func527} from "../func/func527" Ver0.1406にて ../stand/item319へ移動
// export {func528} from "../func/func528" Ver0.1406にて ../stand/item319へ移動
export {func529} from "../func/func529"
// export {func530} from "../func/func530" Ver0.1406にて ../extra_items/item718へ移動
export {func531} from "../func/func531"
// export {func532} from "../func/func532" Ver0.1406にて ../stand/item399へ移動
// export {func533} from "../func/func533" Ver0.1406にて ../stand/item124へ移動
// export {func534} from "../func/func534" Ver0.1406にて ../stand/item302へ移動
export {func535} from "../func/func535"
export {func536} from "../func/func536"
export {func537} from "../func/func537"
export {func538} from "../func/func538"
export {func539} from "../func/func539"
export {func540} from "../func/func540"
export {func541} from "../func/func541"
export {func542} from "../func/func542"
export {func543} from "../func/func543"
export {func544} from "../func/func544"
export {func545} from "../func/func545"
export {func546} from "../func/func546"
export {func547} from "../func/func547"
export {func548} from "../func/func548"
export {func549} from "../func/func549"
export {func550} from "../func/func550"
export {func551} from "../func/func551"
export {func552} from "../func/func552"
export {func553} from "../func/func553"
export {func554} from "../func/func554"
export {func555} from "../func/func555"
export {func556} from "../func/func556"
export {func557} from "../func/func557"
export {func558} from "../func/func558"
export {func559} from "../func/func559"
export {func560} from "../func/func560"
export {func561} from "../func/func561"
export {func562} from "../func/func562"
export {func563} from "../func/func563"
export {func564} from "../func/func564"
export {func565} from "../func/func565"
export {func566} from "../func/func566"
export {func567} from "../func/func567"
export {func568} from "../func/func568"
export {func569} from "../func/func569"
export {func570} from "../func/func570"
export {func571} from "../func/func571"
export {func572} from "../func/func572"
export {func573} from "../func/func573"
export {func574} from "../func/func574"
export {func575} from "../func/func575"
export {func576} from "../func/func576"
export {func577} from "../func/func577"
export {func578} from "../func/func578"
export {func579} from "../func/func579"
export {func580} from "../func/func580"
export {func581} from "../func/func581"
export {func582} from "../func/func582"
export {func583} from "../func/func583"
export {func584} from "../func/func584"
export {func585} from "../func/func585"
export {func586} from "../func/func586"
export {func587} from "../func/func587"
export {func588} from "../func/func588"
export {func589} from "../func/func589"
export {func590} from "../func/func590"
export {func591} from "../func/func591"
export {func592} from "../func/func592"
export {func593} from "../func/func593"
export {func594} from "../func/func594"
export {func595} from "../func/func595"
export {func596} from "../func/func596"
export {func597} from "../func/func597"
export {func598} from "../func/func598"
export {func599} from "../func/func599"
export {func600} from "../func/func600"
export {func601} from "../func/func601"
export {func602} from "../func/func602"
export {func603} from "../func/func603"
export {func604} from "../func/func604"
export {func605} from "../func/func605"
export {func606} from "../func/func606"
export {func607} from "../func/func607"
export {func608} from "../func/func608"
export {func609} from "../func/func609"
export {func610} from "../func/func610"
export {func611} from "../func/func611"
export {func612} from "../func/func612"
export {func613} from "../func/func613"
export {func614} from "../func/func614"
export {func615} from "../func/func615"
export {func616} from "../func/func616"
export {func617} from "../func/func617"
export {func618} from "../func/func618"
export {func619} from "../func/func619"
export {func620} from "../func/func620"
export {func621} from "../func/func621"
export {func622} from "../func/func622"
export {func623} from "../func/func623"
export {func624} from "../func/func624"
export {func625} from "../func/func625"
export {func626} from "../func/func626"
export {func627} from "../func/func627"
// export {func628} from "../func/func628" Ver0.1406にて ../dungeon/dungeon1へ移動
// export {func629} from "../func/func629" Ver0.1406にて ../dungeon/dungeon2へ移動
// export {func630} from "../func/func630" Ver0.1406にて ../dungeon/dungeon3へ移動
// export {func631} from "../func/func631" Ver0.1406にて ../dungeon/dungeon5へ移動
export {func632} from "../func/func632"
// export {func633} from "../func/func633" Ver0.1406にて ../dungeon/dungeon5へ移動
// export {func634} from "../func/func634" Ver0.1406にて ../dungeon/dungeon4へ移動
export {func635} from "../func/func635"
export {func636} from "../func/func636"
export {func637} from "../func/func637"
export {func638} from "../func/func638"
export {func639} from "../func/func639"
export {func640} from "../func/func640"
export {func641} from "../func/func641"
export {func642} from "../func/func642"
export {func643} from "../func/func643"
export {func644} from "../func/func644"
export {func645} from "../func/func645"
export {func646} from "../func/func646"
export {func647} from "../func/func647"
export {func648} from "../func/func648"
export {func649} from "../func/func649"
export {func650} from "../func/func650"
export {func651} from "../func/func651"
export {func652} from "../func/func652"
export {func653} from "../func/func653"
export {func654} from "../func/func654"
export {func655} from "../func/func655"
export {func656} from "../func/func656"
export {func657} from "../func/func657"
export {func658} from "../func/func658"
export {func659} from "../func/func659"
export {func660} from "../func/func660"
export {func661} from "../func/func661"
export {func662} from "../func/func662"
export {func663} from "../func/func663"
export {func664} from "../func/func664"
export {func665} from "../func/func665"
export {func666} from "../func/func666"
export {func667} from "../func/func667"
export {func668} from "../func/func668"
export {func669} from "../func/func669"
export {func670} from "../func/func670"
export {func671} from "../func/func671"
export {func672} from "../func/func672"
export {func673} from "../func/func673"
export {func674} from "../func/func674"
export {func675} from "../func/func675"
export {func676} from "../func/func676"
export {func677} from "../func/func677"
export {func678} from "../func/func678"
export {func679} from "../func/func679"
export {func680} from "../func/func680"
export {func681} from "../func/func681"
export {func682} from "../func/func682"
export {func683} from "../func/func683"
export {func684} from "../func/func684"
// export {func685} from "../func/func685" Ver0.1406にて ../dungeon/dungeon1へ移動
// export {func686} from "../func/func686" Ver0.1406にて ../dungeon/dungeon2へ移動
// export {func687} from "../func/func687" Ver0.1406にて ../dungeon/dungeon3へ移動
export {func688} from "../func/func688"
export {func689} from "../func/func689"
export {func690} from "../func/func690"
export {func691} from "../func/func691"
export {func692} from "../func/func692"
export {func693} from "../func/func693"
export {func694} from "../func/func694"
export {func695} from "../func/func695"
export {func696} from "../func/func696"
export {func697} from "../func/func697"
export {func698} from "../func/func698"
export {func699} from "../func/func699"
export {func700} from "../func/func700"
export {func701} from "../func/func701"
export {func702} from "../func/func702"
// export {func703} from "../func/func703" Ver0.1406にて ../stand/item116へ移動
export {func704} from "../func/func704"
export {func705} from "../func/func705"
export {func706} from "../func/func706"
export {func707} from "../func/func707"
export {func708} from "../func/func708"
export {func709} from "../func/func709"
export {func710} from "../func/func710"
export {func711} from "../func/func711"
export {func712} from "../func/func712"
export {func713} from "../func/func713"
export {func714} from "../func/func714"
export {func715} from "../func/func715"
export {func716} from "../func/func716"
export {func717} from "../func/func717"
export {func718} from "../func/func718"
export {func719} from "../func/func719"
export {func720} from "../func/func720"
export {func721} from "../func/func721"
export {func722} from "../func/func722"
export {func723} from "../func/func723"
export {func724} from "../func/func724"
export {func725} from "../func/func725"
export {func726} from "../func/func726"
export {func727} from "../func/func727"
export {func728} from "../func/func728"
export {func729} from "../func/func729"
export {func730} from "../func/func730"
export {func731} from "../func/func731"
export {func732} from "../func/func732"
export {func733} from "../func/func733"
export {func734} from "../func/func734"
export {func735} from "../func/func735"
export {func736} from "../func/func736"
export {func737} from "../func/func737"
export {func738} from "../func/func738"
export {func739} from "../func/func739"
export {func740} from "../func/func740"
export {func741} from "../func/func741"
export {func742} from "../func/func742"
export {func743} from "../func/func743"
export {func744} from "../func/func744"
export {func745} from "../func/func745"
export {func746} from "../func/func746"
export {func747} from "../func/func747"
export {func748} from "../func/func748"
export {func749} from "../func/func749"
export {func750} from "../func/func750"
export {func751} from "../func/func751"
export {func752} from "../func/func752"
export {func753} from "../func/func753"
export {func754} from "../func/func754"
export {func755} from "../func/func755"
export {func756} from "../func/func756"
export {func757} from "../func/func757"
export {func758} from "../func/func758"
export {func759} from "../func/func759"
export {func760} from "../func/func760"
export {func761} from "../func/func761"
export {func762} from "../func/func762"
export {func763} from "../func/func763"
export {func764} from "../func/func764"
export {func765} from "../func/func765"
export {func766} from "../func/func766"
export {func767} from "../func/func767"
export {func768} from "../func/func768"
export {func769} from "../func/func769"
export {func770} from "../func/func770"
export {func771} from "../func/func771"
export {func772} from "../func/func772"
export {func773} from "../func/func773"
export {func774} from "../func/func774"
export {func775} from "../func/func775"
export {func776} from "../func/func776"
export {func777} from "../func/func777"
export {func778} from "../func/func778"
export {func779} from "../func/func779"
export {func780} from "../func/func780"
export {func781} from "../func/func781"
export {func782} from "../func/func782"
export {func783} from "../func/func783"
export {func784} from "../func/func784"
export {func785} from "../func/func785"
export {func786} from "../func/func786"
export {func787} from "../func/func787"
export {func788} from "../func/func788"
export {func789} from "../func/func789"
export {func790} from "../func/func790"
export {func791} from "../func/func791"
export {func792} from "../func/func792"
export {func793} from "../func/func793"
export {func794} from "../func/func794"
export {func795} from "../func/func795"
// export {func796} from "../func/func796" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func797} from "../func/func797" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func798} from "../func/func798" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func799} from "../func/func799" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func800} from "../func/func800" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func801} from "../func/func801" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func802} from "../func/func802" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func803} from "../func/func803" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func804} from "../func/func804" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func805} from "../func/func805" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func806} from "../func/func806" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func807} from "../func/func807" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func808} from "../func/func808" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func809} from "../func/func809" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func810} from "../func/func810" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func811} from "../func/func811" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func812} from "../func/func812" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func813} from "../func/func813" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func814} from "../func/func814" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func815} from "../func/func815" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func816} from "../func/func816" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func817} from "../func/func817" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func818} from "../func/func818" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func819} from "../func/func819" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func820} from "../func/func820" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func821} from "../func/func821" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func822} from "../func/func822" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func823} from "../func/func823" Ver0.1406にて ../dungeon/dungeon0/PCへ移動
// export {func824a} from "../func/func824a" Ver0.1406にて ../dungeon/dungeon0/hotelへ移動
// export {func824b} from "../func/func824b" Ver0.1406にて ../dungeon/dungeon0/hotelへ移動
// export {func824c} from "../func/func824c" Ver0.1406にて ../dungeon/dungeon0/hotelへ移動
//export {func825} from "../func/func825" Ver0.1406にて ../dungeon/dungeon1へ移動
// export {func826} from "../func/func826" Ver0.1406にて ../dungeon/dungeon0/hotelへ移動
// export {func827} from "../func/func827" Ver0.1406にて ../dungeon/dungeon2へ移動
// export {func828} from "../func/func828" Ver0.1406にて ../dungeon/dungeon0/hotelへ移動
// export {func829} from "../func/func829" Ver0.1406にて ../dungeon/dungeon3へ移動
export {func830} from "../func/func830"
export {func831} from "../func/func831"
// export {func832} from "../func/func832" Ver0.1406にて ../dungeon/dungeon0/hotelへ移動
// export {func833} from "../func/func833" Ver0.1406にて ../dungeon/dungeon0/hotelへ移動
// export {func834} from "../func/func834" Ver0.1406にて ../dungeon/dungeon4へ移動
export {func835} from "../func/func835"
// export {func836} from "../func/func836" Ver0.1406にて ../dungeon/dungeon5へ移動
// export {func837} from "../func/func837" Ver0.1406にて ../dungeon/dungeon0/hotelへ移動
// export {func838} from "../func/func838" Ver0.1406にて ../dungeon/dungeon0/hotelへ移動
export {func839} from "../func/func839"
export {func840} from "../func/func840"
export {func841} from "../func/func841"
export {func842} from "../func/func842"
export {func843} from "../func/func843"
export {func844} from "../func/func844"
export {func845} from "../func/func845"
export {func846} from "../func/func846"
export {func847} from "../func/func847"
export {func848} from "../func/func848"
export {func849} from "../func/func849"
export {func850} from "../func/func850"
export {func851} from "../func/func851"
export {func852} from "../func/func852"
export {func853} from "../func/func853"
export {func854} from "../func/func854"
export {func855} from "../func/func855"
export {func856} from "../func/func856"
export {func857} from "../func/func857"
export {func858} from "../func/func858"
export {func859} from "../func/func859"
export {func860} from "../func/func860"
export {func861} from "../func/func861"
export {func862} from "../func/func862"
export {func863} from "../func/func863"
export {func864} from "../func/func864"
export {func865} from "../func/func865"
export {func866} from "../func/func866"
export {func867} from "../func/func867"
export {func868} from "../func/func868"
export {func869} from "../func/func869"
export {func870} from "../func/func870"
export {func871} from "../func/func871"
export {func872} from "../func/func872"
export {func873} from "../func/func873"
export {func874} from "../func/func874"
export {func875} from "../func/func875"
export {func876} from "../func/func876"
export {func877} from "../func/func877"
export {func878} from "../func/func878"
export {func879} from "../func/func879"
export {func880} from "../func/func880"
export {func881} from "../func/func881"
export {func882} from "../func/func882"
export {func883} from "../func/func883"
export {func884} from "../func/func884"
export {func885} from "../func/func885"
export {func886} from "../func/func886"
export {func887} from "../func/func887"
export {func888} from "../func/func888"
export {func889} from "../func/func889"
export {func890} from "../func/func890"
export {func891} from "../func/func891"
export {func892} from "../func/func892"
export {func893} from "../func/func893"
export {func894} from "../func/func894"
export {func895} from "../func/func895"
export {func896} from "../func/func896"
export {func897} from "../func/func897"
export {func898} from "../func/func898"
export {func899} from "../func/func899"
export {func900} from "../func/func900"
export {func901} from "../func/func901"
export {func902} from "../func/func902"
export {func903} from "../func/func903"
export {func904} from "../func/func904"
export {func905} from "../func/func905"
export {func906} from "../func/func906"
export {func907} from "../func/func907"
export {func908} from "../func/func908"
export {func909} from "../func/func909"
export {func910} from "../func/func910"
export {func911} from "../func/func911"
export {func912} from "../func/func912"
export {func913} from "../func/func913"
export {func914} from "../func/func914"
export {func915} from "../func/func915"
export {func916} from "../func/func916"
export {func917} from "../func/func917"
export {func918} from "../func/func918"
export {func919} from "../func/func919"
export {func920} from "../func/func920"
export {func921} from "../func/func921"
export {func922} from "../func/func922"
export {func923} from "../func/func923"
export {func924} from "../func/func924"
export {func925} from "../func/func925"
export {func926} from "../func/func926"
export {func927} from "../func/func927"
export {func928} from "../func/func928"
export {func929} from "../func/func929"
export {func930} from "../func/func930"
export {func931} from "../func/func931"
export {func932} from "../func/func932"
export {func933} from "../func/func933"
export {func934} from "../func/func934"
export {func935} from "../func/func935"