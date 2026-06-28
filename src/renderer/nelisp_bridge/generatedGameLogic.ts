import {
    readStateSlot,
    runStateDiffResult,
    StateDiffEntry,
} from './stateDiffRunner';
import * as Adap from '../adapter/index';
import {
    generatedGameFunctionGroups,
    hasGeneratedGameFunctionMetadata,
} from './generatedGameRegistry';
import { generatedMapStateDiffs } from './generatedMapStateDiff';
import { generatedSelectionStateDiffs } from './generatedSelectionStateDiff';
import { generatedSimpleStateDiffs } from './generatedSimpleStateDiff';
import { generatedConditionalStateDiffs } from './generatedConditionalStateDiff';
import { generatedApplyTimeStateDiffs } from './generatedApplyTimeStateDiff';

type GeneratedGameFunctionName =
    'func203' | 'func340' | 'func384' | 'func689' |
    'makepal' |
    'func492' | 'func0960' |
    'func009' | 'func012' | 'func388' | 'func0411' | 'func495' | 'func531' | 'func1012' |
    'func498' | 'func511' | 'func620' | 'func644' | 'func651' |
    'func199' | 'func209' | 'func216' | 'func227' |
    'func420' | 'func441' | 'func491' | 'func499' | 'func500' | 'func585' |
    'func0923' | 'func0929' | 'func0937' | 'func0938' | 'func0945' | 'func0946' | 'func0968' | 'func0969' | 'func0972' | 'func0975' | 'func0980' | 'func0982' | 'func0986' | 'func0998' |
    'func043' | 'func248' | 'func254' | 'func255' | 'func390' | 'func536' | 'func546' | 'func555' | 'func556' | 'func559' | 'func569' | 'func573' | 'func575' | 'func652' | 'func654' | 'func669' | 'func1032' | 'func1046' | 'func1047' |
    'func246' | 'func250' | 'func251' | 'func542' | 'func547' | 'func574' | 'func576' | 'func581' | 'func1015' | 'func1027' | 'func1041' |
    'func020' | 'func174' | 'func249' | 'func326' | 'func391' | 'func411' | 'func414' | 'func417' | 'func418' | 'func419' | 'func424' | 'func529' | 'func545' | 'func560' | 'func579' | 'func643' | 'func647' | 'func656' | 'func660' | 'func662' | 'func668' | 'func698' | 'func699' | 'func701' | 'func0836' | 'func1021' | 'func1023' | 'func1024' | 'func1025' | 'func1033' |
    'func014' | 'func016' | 'func017' | 'func018' | 'func079' | 'func252' | 'func253' | 'func257' | 'func401' | 'func426' | 'func427' | 'func428' | 'func429' | 'func433' | 'func434' | 'func439' | 'func440' | 'func455' | 'func458' | 'func503' | 'func537' | 'func562' | 'func564' | 'func695' | 'func720' | 'func721' | 'func724' | 'func0831' | 'func0832' | 'func1014' |
    'func223' | 'func226' | 'func393' | 'func404' | 'func444' | 'func445' | 'func446' | 'func447' | 'func450' | 'func451' | 'func453' | 'func454' | 'func497' | 'func501' | 'func514' | 'func515' | 'func516' | 'func517' | 'func518' | 'func584' | 'func586' | 'func601' | 'func616' | 'func636' | 'func638' | 'func655' | 'func661' | 'func667' | 'func697' | 'func0839' | 'func1009' | 'func1017' | 'func1018' | 'func1030' | 'func1034' | 'func1038' | 'func1039' | 'func1042' | 'func1043' | 'func1051' | 'func1052' |
    'func410' | 'func436' | 'func558' | 'func578' | 'func645' | 'func676' | 'func683' | 'func684' | 'func705' | 'func0853' |
    'func050' | 'func173' | 'func178' | 'func179' | 'func230' | 'func358' | 'func361' | 'func385' | 'func392' | 'func400' | 'func402' | 'func452' | 'func456' | 'func510' | 'func512' | 'func522' | 'func552' | 'func561' | 'func624' | 'func680' | 'func0804' | 'func0806' | 'func0808' | 'func0817' | 'func0825' | 'func0850' | 'func0851' | 'func0852' | 'func1002' | 'func1006' | 'func1007' | 'func1008' | 'func1019' | 'func1020' | 'func1022' | 'func1026' | 'func1028' | 'func1029' | 'func1031' | 'func1035' | 'func1036' | 'func1037' | 'func1040' | 'func1044' | 'func1045' | 'func1048' | 'func1053' | 'func1054' | 'func1055' | 'func1056' |
    'func013' | 'func047' | 'func175' | 'func177' | 'func201' | 'func218' | 'func238' | 'func247' | 'func365' | 'func366' | 'func368' | 'func369' | 'func372' | 'func378' | 'func381' | 'func387' | 'func389' | 'func398' | 'func399' | 'func403' | 'func405' | 'func407' | 'func408' | 'func416' | 'func422' | 'func423' | 'func435' | 'func437' | 'func448' | 'func457' | 'func496' | 'func506' | 'func513' | 'func519' | 'func520' | 'func521' | 'func525' | 'func527' | 'func530' | 'func540' | 'func557' | 'func563' | 'func565' | 'func570' | 'func571' | 'func572' | 'func615' | 'func619' | 'func622' | 'func625' | 'func632' | 'func635' | 'func637' | 'func639' | 'func641' | 'func642' | 'func672' | 'func673' | 'func678' | 'func682' | 'func690' | 'func696' | 'func700' | 'func703' | 'func704' | 'func0805' | 'func0819' | 'func0821' | 'func0827' | 'func0829' | 'func0846' | 'func0898' | 'func1011' | 'func1016' |
    'func023' | 'func024' | 'func027' | 'func028' | 'func029' | 'func030' | 'func031' | 'func033' | 'func034' | 'func035' | 'func036' | 'func037' | 'func038' | 'func039' | 'func040' | 'func042' |
    'func062' | 'func071' | 'func163b' | 'func205' | 'func206' | 'func207' | 'func217' | 'func243' | 'func245' | 'func256' | 'func258' | 'func259' | 'func260' | 'func261' | 'func262' | 'func263' | 'func264' | 'func265' | 'func266' | 'func267' | 'func268' | 'func269' | 'func270' | 'func271' | 'func272' | 'func273' | 'func274' | 'func275' | 'func276' | 'func277' | 'func278' | 'func279' | 'func280' | 'func281' | 'func282' | 'func283' | 'func284' | 'func285' | 'func286' | 'func287' | 'func293' | 'func294' | 'func295' | 'func296' | 'func297' | 'func298' | 'func299' | 'func300' | 'func301' | 'func302' | 'func303' | 'func304' |
    'func305' | 'func306' | 'func307' | 'func308' | 'func309' | 'func310' | 'func311' | 'func312' | 'func313' | 'func314' | 'func315' | 'func316' | 'func317' | 'func318' | 'func319' | 'func320' | 'func321' | 'func322' | 'func335' | 'func336' | 'func371' | 'func386' | 'func431' | 'func1005' | 'func0900' | 'func0901' | 'func0902' |
    'func0903' | 'func0904' | 'func0905' | 'func0906' | 'func0907' | 'func0909' | 'func0956' | 'func0959' |
    'func0911' | 'func0915' | 'func0916' | 'func0917' | 'func0920' | 'func0924' | 'func0926' | 'func0927' | 'func0928' | 'func0933' | 'func0955' | 'func0961' | 'func0962' | 'func0963' | 'func0964' | 'func0965' | 'func0966' | 'func0973' | 'func0974' | 'func0977' |
    'func0939' | 'func0948' | 'func0950' | 'func0952' | 'func0979' | 'func0981' | 'func0983' | 'func0984' | 'func0987' | 'func0989' | 'func0990' | 'func0991' | 'func0992' | 'func0993' | 'func0999' | 'func194' | 'func195' | 'func196' | 'func477' | 'func481' | 'func679' |
    'func044' | 'func070' | 'func211' | 'func240' | 'func356' | 'func362' | 'func374' | 'func376' | 'func383' | 'func409' | 'func438' | 'func443' | 'func504' | 'func544' | 'func550' | 'func554' | 'func577' | 'func626' | 'func640' | 'func677' | 'func681' | 'func692' | 'func694' | 'func0807' | 'func0814' | 'func0848' | 'func1013' |
    'func198' | 'func202' | 'func208' | 'func212' | 'func214' | 'func215' | 'func221' | 'func236' | 'func237' | 'func239' | 'func357' | 'func375' | 'func406' | 'func415' | 'func459' | 'func468' | 'func507' | 'func508' | 'func509' | 'func548' | 'func549' | 'func551' | 'func691' | 'func693' | 'func0799' | 'func0800' | 'func0801' | 'func0802' | 'func0803' | 'func0809' | 'func0810' | 'func0811' | 'func0812' | 'func0813' | 'func0815' | 'func0816' | 'func0818' | 'func0820' | 'func0822' | 'func0823' | 'func0833' | 'func0834' | 'func0835' | 'func0837' | 'func0838' | 'func0841' | 'func0842' | 'func0844' | 'func0845' | 'func0847' | 'func0849' | 'func1000' | 'func1001' | 'func1049' | 'func0824' | 'func0828' | 'func425';

interface GeneratedGameFunctionCall {
    thisArg?: unknown;
    args?: unknown[];
}

export interface GeneratedGameFunctionStats {
    total: number;
    byName: Record<string, number>;
    lastName?: string;
    lastAt?: string;
    lastOutputCount?: number;
}

type FlagValue = boolean | string | number | null | undefined;

const STATS_KEY = '__NELISP_STATE_DIFF_STATS__';

const generatedStateDiffFunctions: Record<GeneratedGameFunctionName, (call: GeneratedGameFunctionCall) => StateDiffEntry> = {
    func203: () => cloneApplyTimeGeneratedStateDiff('func203'),
    func340: () => cloneApplyTimeGeneratedStateDiff('func340'),
    func384: () => cloneApplyTimeGeneratedStateDiff('func384'),
    func689: () => cloneApplyTimeGeneratedStateDiff('func689'),
    makepal: () => generatedConditionalStateDiffs.makepal(),
    func492: () => generatedConditionalStateDiffs.func492(),
    func0960: () => generatedConditionalStateDiffs.func0960(),
    func009: () => generatedConditionalStateDiffs.func009(),
    func012: () => generatedConditionalStateDiffs.func012(),
    func388: () => generatedConditionalStateDiffs.func388(),
    func0411: () => generatedConditionalStateDiffs.func0411(),
    func495: () => generatedConditionalStateDiffs.func495(),
    func531: () => generatedConditionalStateDiffs.func531(),
    func1012: () => generatedConditionalStateDiffs.func1012(),
    func498: () => generatedConditionalStateDiffs.func498(),
    func511: () => generatedConditionalStateDiffs.func511(),
    func620: () => generatedConditionalStateDiffs.func620(),
    func644: () => generatedConditionalStateDiffs.func644(),
    func651: () => generatedConditionalStateDiffs.func651(),
    func199: () => generatedConditionalStateDiffs.func199(),
    func209: () => generatedConditionalStateDiffs.func209(),
    func216: () => generatedConditionalStateDiffs.func216(),
    func227: () => generatedConditionalStateDiffs.func227(),
    func420: () => generatedConditionalStateDiffs.func420(),
    func441: () => generatedConditionalStateDiffs.func441(),
    func491: () => generatedConditionalStateDiffs.func491(),
    func499: () => generatedConditionalStateDiffs.func499(),
    func500: () => generatedConditionalStateDiffs.func500(),
    func585: () => generatedConditionalStateDiffs.func585(),
    func0923: () => generatedConditionalStateDiffs.func0923(),
    func0929: () => generatedConditionalStateDiffs.func0929(),
    func0937: () => generatedConditionalStateDiffs.func0937(),
    func0938: () => generatedConditionalStateDiffs.func0938(),
    func0945: () => generatedConditionalStateDiffs.func0945(),
    func0946: () => generatedConditionalStateDiffs.func0946(),
    func0968: () => generatedConditionalStateDiffs.func0968(),
    func0969: () => generatedConditionalStateDiffs.func0969(),
    func0972: () => generatedConditionalStateDiffs.func0972(),
    func0975: () => generatedConditionalStateDiffs.func0975(),
    func0980: () => generatedConditionalStateDiffs.func0980(),
    func0982: () => generatedConditionalStateDiffs.func0982(),
    func0986: () => generatedConditionalStateDiffs.func0986(),
    func0998: () => generatedConditionalStateDiffs.func0998(),
    func043: () => generatedConditionalStateDiffs.func043(),
    func248: () => generatedConditionalStateDiffs.func248(),
    func254: () => generatedConditionalStateDiffs.func254(),
    func255: () => generatedConditionalStateDiffs.func255(),
    func390: () => generatedConditionalStateDiffs.func390(),
    func536: () => generatedConditionalStateDiffs.func536(),
    func546: () => generatedConditionalStateDiffs.func546(),
    func555: () => generatedConditionalStateDiffs.func555(),
    func556: () => generatedConditionalStateDiffs.func556(),
    func559: () => generatedConditionalStateDiffs.func559(),
    func569: () => generatedConditionalStateDiffs.func569(),
    func573: () => generatedConditionalStateDiffs.func573(),
    func575: () => generatedConditionalStateDiffs.func575(),
    func652: () => generatedConditionalStateDiffs.func652(),
    func654: () => generatedConditionalStateDiffs.func654(),
    func669: () => generatedConditionalStateDiffs.func669(),
    func1032: () => generatedConditionalStateDiffs.func1032(),
    func1046: () => generatedConditionalStateDiffs.func1046(),
    func1047: () => generatedConditionalStateDiffs.func1047(),
    func246: () => generatedConditionalStateDiffs.func246(),
    func250: () => generatedConditionalStateDiffs.func250(),
    func251: () => generatedConditionalStateDiffs.func251(),
    func542: () => generatedConditionalStateDiffs.func542(),
    func547: () => generatedConditionalStateDiffs.func547(),
    func574: () => generatedConditionalStateDiffs.func574(),
    func576: () => generatedConditionalStateDiffs.func576(),
    func581: () => generatedConditionalStateDiffs.func581(),
    func1015: () => generatedConditionalStateDiffs.func1015(),
    func1027: () => generatedConditionalStateDiffs.func1027(),
    func1041: () => generatedConditionalStateDiffs.func1041(),

    func020: () => generatedConditionalStateDiffs.func020(),
    func174: () => generatedConditionalStateDiffs.func174(),
    func249: () => generatedConditionalStateDiffs.func249(),
    func326: () => generatedConditionalStateDiffs.func326(),
    func391: () => generatedConditionalStateDiffs.func391(),
    func411: () => generatedConditionalStateDiffs.func411(),
    func414: () => generatedConditionalStateDiffs.func414(),
    func417: () => generatedConditionalStateDiffs.func417(),
    func418: () => generatedConditionalStateDiffs.func418(),
    func419: () => generatedConditionalStateDiffs.func419(),
    func424: () => generatedConditionalStateDiffs.func424(),
    func529: () => generatedConditionalStateDiffs.func529(),
    func545: () => generatedConditionalStateDiffs.func545(),
    func560: () => generatedConditionalStateDiffs.func560(),
    func579: () => generatedConditionalStateDiffs.func579(),
    func643: () => generatedConditionalStateDiffs.func643(),
    func647: () => generatedConditionalStateDiffs.func647(),
    func656: () => generatedConditionalStateDiffs.func656(),
    func660: () => generatedConditionalStateDiffs.func660(),
    func662: () => generatedConditionalStateDiffs.func662(),
    func668: () => generatedConditionalStateDiffs.func668(),
    func698: () => generatedConditionalStateDiffs.func698(),
    func699: () => generatedConditionalStateDiffs.func699(),
    func701: () => generatedConditionalStateDiffs.func701(),
    func0836: () => generatedConditionalStateDiffs.func0836(),
    func1021: () => generatedConditionalStateDiffs.func1021(),
    func1023: () => generatedConditionalStateDiffs.func1023(),
    func1024: () => generatedConditionalStateDiffs.func1024(),
    func1025: () => generatedConditionalStateDiffs.func1025(),
    func1033: () => generatedConditionalStateDiffs.func1033(),
    func014: () => generatedConditionalStateDiffs.func014(),
    func016: () => generatedConditionalStateDiffs.func016(),
    func017: () => generatedConditionalStateDiffs.func017(),
    func018: () => generatedConditionalStateDiffs.func018(),
    func079: () => generatedConditionalStateDiffs.func079(),
    func252: () => generatedConditionalStateDiffs.func252(),
    func253: () => generatedConditionalStateDiffs.func253(),
    func257: () => generatedConditionalStateDiffs.func257(),
    func401: () => generatedConditionalStateDiffs.func401(),
    func426: () => generatedConditionalStateDiffs.func426(),
    func427: () => generatedConditionalStateDiffs.func427(),
    func428: () => generatedConditionalStateDiffs.func428(),
    func429: () => generatedConditionalStateDiffs.func429(),
    func433: () => generatedConditionalStateDiffs.func433(),
    func434: () => generatedConditionalStateDiffs.func434(),
    func439: () => generatedConditionalStateDiffs.func439(),
    func440: () => generatedConditionalStateDiffs.func440(),
    func455: () => generatedConditionalStateDiffs.func455(),
    func458: () => generatedConditionalStateDiffs.func458(),
    func503: () => generatedConditionalStateDiffs.func503(),
    func537: () => generatedConditionalStateDiffs.func537(),
    func562: () => generatedConditionalStateDiffs.func562(),
    func564: () => generatedConditionalStateDiffs.func564(),
    func695: () => generatedConditionalStateDiffs.func695(),
    func720: () => generatedConditionalStateDiffs.func720(),
    func721: () => generatedConditionalStateDiffs.func721(),
    func724: () => generatedConditionalStateDiffs.func724(),
    func0831: () => generatedConditionalStateDiffs.func0831(),
    func0832: () => generatedConditionalStateDiffs.func0832(),
    func1014: () => generatedConditionalStateDiffs.func1014(),
    func223: () => generatedConditionalStateDiffs.func223(),
    func226: () => generatedConditionalStateDiffs.func226(),
    func393: () => generatedConditionalStateDiffs.func393(),
    func404: () => generatedConditionalStateDiffs.func404(),
    func444: () => generatedConditionalStateDiffs.func444(),
    func445: () => generatedConditionalStateDiffs.func445(),
    func446: () => generatedConditionalStateDiffs.func446(),
    func447: () => generatedConditionalStateDiffs.func447(),
    func450: () => generatedConditionalStateDiffs.func450(),
    func451: () => generatedConditionalStateDiffs.func451(),
    func453: () => generatedConditionalStateDiffs.func453(),
    func454: () => generatedConditionalStateDiffs.func454(),
    func497: () => generatedConditionalStateDiffs.func497(),
    func501: () => generatedConditionalStateDiffs.func501(),
    func514: () => generatedConditionalStateDiffs.func514(),
    func515: () => generatedConditionalStateDiffs.func515(),
    func516: () => generatedConditionalStateDiffs.func516(),
    func517: () => generatedConditionalStateDiffs.func517(),
    func518: () => generatedConditionalStateDiffs.func518(),
    func584: () => generatedConditionalStateDiffs.func584(),
    func586: () => generatedConditionalStateDiffs.func586(),
    func601: () => generatedConditionalStateDiffs.func601(),
    func616: () => generatedConditionalStateDiffs.func616(),
    func636: () => generatedConditionalStateDiffs.func636(),
    func638: () => generatedConditionalStateDiffs.func638(),
    func655: () => generatedConditionalStateDiffs.func655(),
    func661: () => generatedConditionalStateDiffs.func661(),
    func667: () => generatedConditionalStateDiffs.func667(),
    func697: () => generatedConditionalStateDiffs.func697(),
    func0839: () => generatedConditionalStateDiffs.func0839(),
    func1009: () => generatedConditionalStateDiffs.func1009(),
    func1017: () => generatedConditionalStateDiffs.func1017(),
    func1018: () => generatedConditionalStateDiffs.func1018(),
    func1030: () => generatedConditionalStateDiffs.func1030(),
    func1034: () => generatedConditionalStateDiffs.func1034(),
    func1038: () => generatedConditionalStateDiffs.func1038(),
    func1039: () => generatedConditionalStateDiffs.func1039(),
    func1042: () => generatedConditionalStateDiffs.func1042(),
    func1043: () => generatedConditionalStateDiffs.func1043(),
    func1051: () => generatedConditionalStateDiffs.func1051(),
    func1052: () => generatedConditionalStateDiffs.func1052(),
    func410: () => generatedConditionalStateDiffs.func410(),
    func436: () => generatedConditionalStateDiffs.func436(),
    func558: () => generatedConditionalStateDiffs.func558(),
    func578: () => generatedConditionalStateDiffs.func578(),
    func645: () => generatedConditionalStateDiffs.func645(),
    func676: () => generatedConditionalStateDiffs.func676(),
    func683: () => generatedConditionalStateDiffs.func683(),
    func684: () => generatedConditionalStateDiffs.func684(),
    func705: () => generatedConditionalStateDiffs.func705(),
    func0853: () => generatedConditionalStateDiffs.func0853(),
    func050: () => generatedConditionalStateDiffs.func050(),
    func173: () => generatedConditionalStateDiffs.func173(),
    func178: () => generatedConditionalStateDiffs.func178(),
    func179: () => generatedConditionalStateDiffs.func179(),
    func230: () => generatedConditionalStateDiffs.func230(),
    func358: () => generatedConditionalStateDiffs.func358(),
    func361: () => generatedConditionalStateDiffs.func361(),
    func385: () => generatedConditionalStateDiffs.func385(),
    func392: () => generatedConditionalStateDiffs.func392(),
    func400: () => generatedConditionalStateDiffs.func400(),
    func402: () => generatedConditionalStateDiffs.func402(),
    func452: () => generatedConditionalStateDiffs.func452(),
    func456: () => generatedConditionalStateDiffs.func456(),
    func510: () => generatedConditionalStateDiffs.func510(),
    func512: () => generatedConditionalStateDiffs.func512(),
    func522: () => generatedConditionalStateDiffs.func522(),
    func552: () => generatedConditionalStateDiffs.func552(),
    func561: () => generatedConditionalStateDiffs.func561(),
    func624: () => generatedConditionalStateDiffs.func624(),
    func680: () => generatedConditionalStateDiffs.func680(),
    func0804: () => generatedConditionalStateDiffs.func0804(),
    func0806: () => generatedConditionalStateDiffs.func0806(),
    func0808: () => generatedConditionalStateDiffs.func0808(),
    func0817: () => generatedConditionalStateDiffs.func0817(),
    func0825: () => generatedConditionalStateDiffs.func0825(),
    func0850: () => generatedConditionalStateDiffs.func0850(),
    func0851: () => generatedConditionalStateDiffs.func0851(),
    func0852: () => generatedConditionalStateDiffs.func0852(),
    func1002: () => generatedConditionalStateDiffs.func1002(),
    func1006: () => generatedConditionalStateDiffs.func1006(),
    func1007: () => generatedConditionalStateDiffs.func1007(),
    func1008: () => generatedConditionalStateDiffs.func1008(),
    func1019: () => generatedConditionalStateDiffs.func1019(),
    func1020: () => generatedConditionalStateDiffs.func1020(),
    func1022: () => generatedConditionalStateDiffs.func1022(),
    func1026: () => generatedConditionalStateDiffs.func1026(),
    func1028: () => generatedConditionalStateDiffs.func1028(),
    func1029: () => generatedConditionalStateDiffs.func1029(),
    func1031: () => generatedConditionalStateDiffs.func1031(),
    func1035: () => generatedConditionalStateDiffs.func1035(),
    func1036: () => generatedConditionalStateDiffs.func1036(),
    func1037: () => generatedConditionalStateDiffs.func1037(),
    func1040: () => generatedConditionalStateDiffs.func1040(),
    func1044: () => generatedConditionalStateDiffs.func1044(),
    func1045: () => generatedConditionalStateDiffs.func1045(),
    func1048: () => generatedConditionalStateDiffs.func1048(),
    func1053: () => generatedConditionalStateDiffs.func1053(),
    func1054: () => generatedConditionalStateDiffs.func1054(),
    func1055: () => generatedConditionalStateDiffs.func1055(),
    func1056: () => generatedConditionalStateDiffs.func1056(),
    func013: () => generatedConditionalStateDiffs.func013(),
    func047: () => generatedConditionalStateDiffs.func047(),
    func175: () => generatedConditionalStateDiffs.func175(),
    func177: () => generatedConditionalStateDiffs.func177(),
    func201: () => generatedConditionalStateDiffs.func201(),
    func218: () => generatedConditionalStateDiffs.func218(),
    func238: () => generatedConditionalStateDiffs.func238(),
    func247: () => generatedConditionalStateDiffs.func247(),
    func365: () => generatedConditionalStateDiffs.func365(),
    func366: () => generatedConditionalStateDiffs.func366(),
    func368: () => generatedConditionalStateDiffs.func368(),
    func369: () => generatedConditionalStateDiffs.func369(),
    func372: () => generatedConditionalStateDiffs.func372(),
    func378: () => generatedConditionalStateDiffs.func378(),
    func381: () => generatedConditionalStateDiffs.func381(),
    func387: () => generatedConditionalStateDiffs.func387(),
    func389: () => generatedConditionalStateDiffs.func389(),
    func398: () => generatedConditionalStateDiffs.func398(),
    func399: () => generatedConditionalStateDiffs.func399(),
    func403: () => generatedConditionalStateDiffs.func403(),
    func405: () => generatedConditionalStateDiffs.func405(),
    func407: () => generatedConditionalStateDiffs.func407(),
    func408: () => generatedConditionalStateDiffs.func408(),
    func416: () => generatedConditionalStateDiffs.func416(),
    func422: () => generatedConditionalStateDiffs.func422(),
    func423: () => generatedConditionalStateDiffs.func423(),
    func435: () => generatedConditionalStateDiffs.func435(),
    func437: () => generatedConditionalStateDiffs.func437(),
    func448: () => generatedConditionalStateDiffs.func448(),
    func457: () => generatedConditionalStateDiffs.func457(),
    func496: () => generatedConditionalStateDiffs.func496(),
    func506: () => generatedConditionalStateDiffs.func506(),
    func513: () => generatedConditionalStateDiffs.func513(),
    func519: () => generatedConditionalStateDiffs.func519(),
    func520: () => generatedConditionalStateDiffs.func520(),
    func521: () => generatedConditionalStateDiffs.func521(),
    func525: () => generatedConditionalStateDiffs.func525(),
    func527: () => generatedConditionalStateDiffs.func527(),
    func530: () => generatedConditionalStateDiffs.func530(),
    func540: () => generatedConditionalStateDiffs.func540(),
    func557: () => generatedConditionalStateDiffs.func557(),
    func563: () => generatedConditionalStateDiffs.func563(),
    func565: () => generatedConditionalStateDiffs.func565(),
    func570: () => generatedConditionalStateDiffs.func570(),
    func571: () => generatedConditionalStateDiffs.func571(),
    func572: () => generatedConditionalStateDiffs.func572(),
    func615: () => generatedConditionalStateDiffs.func615(),
    func619: () => generatedConditionalStateDiffs.func619(),
    func622: () => generatedConditionalStateDiffs.func622(),
    func625: () => generatedConditionalStateDiffs.func625(),
    func632: () => generatedConditionalStateDiffs.func632(),
    func635: () => generatedConditionalStateDiffs.func635(),
    func637: () => generatedConditionalStateDiffs.func637(),
    func639: () => generatedConditionalStateDiffs.func639(),
    func641: () => generatedConditionalStateDiffs.func641(),
    func642: () => generatedConditionalStateDiffs.func642(),
    func672: () => generatedConditionalStateDiffs.func672(),
    func673: () => generatedConditionalStateDiffs.func673(),
    func678: () => generatedConditionalStateDiffs.func678(),
    func682: () => generatedConditionalStateDiffs.func682(),
    func690: () => generatedConditionalStateDiffs.func690(),
    func696: () => generatedConditionalStateDiffs.func696(),
    func700: () => generatedConditionalStateDiffs.func700(),
    func703: () => generatedConditionalStateDiffs.func703(),
    func704: () => generatedConditionalStateDiffs.func704(),
    func0805: () => generatedConditionalStateDiffs.func0805(),
    func0819: () => generatedConditionalStateDiffs.func0819(),
    func0821: () => generatedConditionalStateDiffs.func0821(),
    func0827: () => generatedConditionalStateDiffs.func0827(),
    func0829: () => generatedConditionalStateDiffs.func0829(),
    func0846: () => generatedConditionalStateDiffs.func0846(),
    func0898: () => generatedConditionalStateDiffs.func0898(),
    func1011: () => generatedConditionalStateDiffs.func1011(),
    func1016: () => generatedConditionalStateDiffs.func1016(),
    func0824: () => cloneSimpleGeneratedStateDiff('func0824'),
    func0828: () => cloneSimpleGeneratedStateDiff('func0828'),
    func425: () => cloneSimpleGeneratedStateDiff('func425'),
    func044: () => generatedConditionalStateDiffs.func044(),
    func070: () => generatedConditionalStateDiffs.func070(),
    func211: () => generatedConditionalStateDiffs.func211(),
    func240: () => generatedConditionalStateDiffs.func240(),
    func356: () => generatedConditionalStateDiffs.func356(),
    func362: () => generatedConditionalStateDiffs.func362(),
    func374: () => generatedConditionalStateDiffs.func374(),
    func376: () => generatedConditionalStateDiffs.func376(),
    func383: () => generatedConditionalStateDiffs.func383(),
    func409: () => generatedConditionalStateDiffs.func409(),
    func438: () => generatedConditionalStateDiffs.func438(),
    func443: () => generatedConditionalStateDiffs.func443(),
    func504: () => generatedConditionalStateDiffs.func504(),
    func544: () => generatedConditionalStateDiffs.func544(),
    func550: () => generatedConditionalStateDiffs.func550(),
    func554: () => generatedConditionalStateDiffs.func554(),
    func577: () => generatedConditionalStateDiffs.func577(),
    func626: () => generatedConditionalStateDiffs.func626(),
    func640: () => generatedConditionalStateDiffs.func640(),
    func677: () => generatedConditionalStateDiffs.func677(),
    func681: () => generatedConditionalStateDiffs.func681(),
    func692: () => generatedConditionalStateDiffs.func692(),
    func694: () => generatedConditionalStateDiffs.func694(),
    func0807: () => generatedConditionalStateDiffs.func0807(),
    func0814: () => generatedConditionalStateDiffs.func0814(),
    func0848: () => generatedConditionalStateDiffs.func0848(),
    func1013: () => generatedConditionalStateDiffs.func1013(),
    func198: () => cloneSimpleGeneratedStateDiff('func198'),
    func202: () => cloneSimpleGeneratedStateDiff('func202'),
    func208: () => cloneSimpleGeneratedStateDiff('func208'),
    func212: () => cloneSimpleGeneratedStateDiff('func212'),
    func214: () => cloneSimpleGeneratedStateDiff('func214'),
    func215: () => cloneSimpleGeneratedStateDiff('func215'),
    func221: () => cloneSimpleGeneratedStateDiff('func221'),
    func236: () => cloneSimpleGeneratedStateDiff('func236'),
    func237: () => cloneSimpleGeneratedStateDiff('func237'),
    func239: () => cloneSimpleGeneratedStateDiff('func239'),
    func357: () => cloneSimpleGeneratedStateDiff('func357'),
    func375: () => cloneSimpleGeneratedStateDiff('func375'),
    func406: () => cloneSimpleGeneratedStateDiff('func406'),
    func415: () => cloneSimpleGeneratedStateDiff('func415'),
    func459: () => cloneSimpleGeneratedStateDiff('func459'),
    func468: () => cloneSimpleGeneratedStateDiff('func468'),
    func507: () => cloneSimpleGeneratedStateDiff('func507'),
    func508: () => cloneSimpleGeneratedStateDiff('func508'),
    func509: () => cloneSimpleGeneratedStateDiff('func509'),
    func548: () => cloneSimpleGeneratedStateDiff('func548'),
    func549: () => cloneSimpleGeneratedStateDiff('func549'),
    func551: () => cloneSimpleGeneratedStateDiff('func551'),
    func691: () => cloneSimpleGeneratedStateDiff('func691'),
    func693: () => cloneSimpleGeneratedStateDiff('func693'),
    func0799: () => cloneSimpleGeneratedStateDiff('func0799'),
    func0800: () => cloneSimpleGeneratedStateDiff('func0800'),
    func0801: () => cloneSimpleGeneratedStateDiff('func0801'),
    func0802: () => cloneSimpleGeneratedStateDiff('func0802'),
    func0803: () => cloneSimpleGeneratedStateDiff('func0803'),
    func0809: () => cloneSimpleGeneratedStateDiff('func0809'),
    func0810: () => cloneSimpleGeneratedStateDiff('func0810'),
    func0811: () => cloneSimpleGeneratedStateDiff('func0811'),
    func0812: () => cloneSimpleGeneratedStateDiff('func0812'),
    func0813: () => cloneSimpleGeneratedStateDiff('func0813'),
    func0815: () => cloneSimpleGeneratedStateDiff('func0815'),
    func0816: () => cloneSimpleGeneratedStateDiff('func0816'),
    func0818: () => cloneSimpleGeneratedStateDiff('func0818'),
    func0820: () => cloneSimpleGeneratedStateDiff('func0820'),
    func0822: () => cloneSimpleGeneratedStateDiff('func0822'),
    func0823: () => cloneSimpleGeneratedStateDiff('func0823'),
    func0833: () => cloneSimpleGeneratedStateDiff('func0833'),
    func0834: () => cloneSimpleGeneratedStateDiff('func0834'),
    func0835: () => cloneSimpleGeneratedStateDiff('func0835'),
    func0837: () => cloneSimpleGeneratedStateDiff('func0837'),
    func0838: () => cloneSimpleGeneratedStateDiff('func0838'),
    func0841: () => cloneSimpleGeneratedStateDiff('func0841'),
    func0842: () => cloneSimpleGeneratedStateDiff('func0842'),
    func0844: () => cloneSimpleGeneratedStateDiff('func0844'),
    func0845: () => cloneSimpleGeneratedStateDiff('func0845'),
    func0847: () => cloneSimpleGeneratedStateDiff('func0847'),
    func0849: () => cloneSimpleGeneratedStateDiff('func0849'),
    func1000: () => cloneSimpleGeneratedStateDiff('func1000'),
    func1001: () => cloneSimpleGeneratedStateDiff('func1001'),
    func1049: () => cloneSimpleGeneratedStateDiff('func1049'),
    func023: () => [
        ['dtw-debug-print', 23],
        [459, 0],
        [128, 0],
    ],
    func027: () => [
        ['dtw-debug-print', 27],
        ['game-set-message', '動けるようになった。', '', 7, 0, 0, 0],
        ['game-auto-draw', 9],
    ],
    func028: () => [
        ['dtw-debug-print', 28],
        ['game-set-message', '透明状態ではなくなった', '', 7, 0, 0, 0],
        ['game-auto-draw', 9],
    ],
    func029: () => [
        ['dtw-debug-print', 29],
        ['game-set-message', '周囲がドロドロではなくなった', '', 7, 0, 0, 0],
        ['game-auto-draw', 9],
    ],
    func030: () => [
        ['dtw-debug-print', 30],
        ['game-set-message', '鈍足状態が治った', '', 7, 0, 0, 0],
        ['game-auto-draw', 9],
    ],
    func031: () => [
        ['dtw-debug-print', 31],
        ['dtw-play-sound', 123],
        [470, 19],
        ['game-auto-draw', 2],
        [470, 9],
        ['game-auto-draw', 2],
        [470, 8],
        ['game-auto-draw', 2],
        [470, 7],
        ['game-auto-draw', 2],
        [470, 6],
        ['game-auto-draw', 2],
        [470, 5],
        ['game-auto-draw', 2],
        [470, 4],
        ['game-auto-draw', 2],
        [470, 3],
        ['game-auto-draw', 2],
        [470, 2],
        ['game-auto-draw', 2],
        [470, 1],
        ['game-auto-draw', 5],
        [470, 0],
        ['game-set-message', '変身が解除された', '', 7, 0, 0, 0],
        ['game-auto-draw', 9],
    ],
    func033: () => [
        ['dtw-debug-print', 33],
        [471, 9],
        ['game-auto-draw', 2],
        [471, 10],
        ['game-auto-draw', 2],
        [471, 2],
        ['game-auto-draw', 5],
        [471, 1],
        ['game-set-message', '元通りくっついた', '', 7, 0, 0, 0],
        ['game-auto-draw', 9],
        [471, 0],
    ],
    func034: () => {
        const entries: StateDiffEntry[] = [
            ['dtw-debug-print', 34],
        ];
        if (Number(readStateSlot(132) ?? 0) !== 0) return entries;
        entries.push(
            ['game-set-message', '盲目状態が治った', '', 7, 0, 0, 0],
            ['game-auto-draw', 9],
        );
        return entries;
    },
    func035: () => [
        ['dtw-debug-print', 35],
        ['game-set-message', 'ンドゥールの気分が消えた', '', 7, 0, 0, 0],
        ['game-auto-draw', 9],
    ],
    func036: () => [
        ['dtw-debug-print', 36],
        ['game-set-message', '混乱状態が治った', '', 7, 0, 0, 0],
        ['game-auto-draw', 9],
    ],
    func037: () => [
        ['dtw-debug-print', 37],
        ['game-set-message', '冷静になった。', '', 7, 0, 0, 0],
        ['game-auto-draw', 9],
    ],
    func038: () => [
        ['dtw-debug-print', 38],
        ['game-auto-draw', 9],
        ['game-set-message', 'ﾖｰﾖｰﾏｯ「もっとおおおおおお', '  私を叱ってええええええ」', 7, 1, 0, 1],
        ['game-auto-draw', 4],
        ['game-set-message', 'ﾖｰﾖｰﾏｯのあまりの臭さで', '正気に戻った。', 7, 0, 0, 0],
        ['game-auto-draw', 9],
    ],
    func039: () => [
        ['dtw-debug-print', 39],
        ['game-auto-draw', 9],
        ['game-set-message', '錠前のショックで', '正気に戻った。', 7, 0, 0, 0],
        ['game-auto-draw', 9],
    ],
    func040: () => [
        ['dtw-debug-print', 40],
        ['game-set-message', '鉄塔が消滅した。', '', 7, 0, 0, 0],
        ['game-auto-draw', 9],
    ],
    func042: () => [
        ['dtw-debug-print', 42],
        [472, 1],
        ['game-auto-draw', 30],
        [472, 0],
        ['game-set-message', 'ﾄﾞｯﾋﾟｵと交代した。', '', 7, 0, 0, 0],
        [144, 0],
        [199, 2],
        ['game-auto-draw', 9],
    ],
    func062: () => [
        ['dtw-debug-print', 62],
        [224, Number(readStateSlot(224) ?? 0) + 1],
        ['index-set', [['index-ref', [['state-slot-ref', 233]], [['state-slot-ref', 224]]]], 0, 602],
    ],
    func071: () => {
        const hungerState = Number(readStateSlot(361) ?? 0);
        const entries: StateDiffEntry[] = [
            ['dtw-debug-print', 71],
        ];
        if (hungerState <= 3) {
            entries.push(['dtw-play-sound', 129]);
        }
        entries.push([240, 0]);
        if (hungerState === 1) {
            entries.push(['game-set-message', 'お腹が減ってきた…', '', 7, 0, 0, 0]);
        }
        if (hungerState === 2) {
            entries.push(['game-set-message', 'ハラペコで目が回ってきた…', '', 7, 0, 0, 0]);
        }
        if (hungerState === 3) {
            entries.push(['game-set-message', 'だめだ！  もう倒れそうだ！', '', 7, 0, 0, 0]);
        }
        if (hungerState === 4) {
            entries.push(['game-set-message', '早く…  何か食べないと…', '', 7, 0, 0, 0]);
        }
        if (hungerState === 5) {
            entries.push(['game-set-message', '飢え死にしてしまう！', '', 7, 0, 0, 0]);
        }
        entries.push(['game-auto-draw', 10]);
        return entries;
    },
    func163b: () => {
        const entries: StateDiffEntry[] = [];
        const roomVariant = Number(readStateSlot(409) ?? 0);
        let sourceOffset = Number(readStateSlot(778) ?? 0);
        if (roomVariant === 0) {
            sourceOffset = 0;
            entries.push([778, sourceOffset]);
        }
        if (roomVariant === 1) {
            sourceOffset = 10;
            entries.push([778, sourceOffset]);
        }
        if (roomVariant === 2) {
            sourceOffset = 20;
            entries.push([778, sourceOffset]);
        }
        if (roomVariant === 3) {
            sourceOffset = 30;
            entries.push([778, sourceOffset]);
        }
        const x = (Number(readStateSlot(66) ?? 0) + 2) * Number(readStateSlot(35) ?? 0);
        const y = Number(readStateSlot(67) ?? 0) * Number(readStateSlot(36) ?? 0);
        let sourceX = x + sourceOffset;
        let sourceY = y + sourceOffset;
        entries.push([779, sourceX], [780, sourceY]);
        if (Number(readStateSlot(217) ?? 0) === 0) {
            const direction = Number(readStateSlot(199) ?? 0);
            if (direction === 1) {
                sourceX = x + sourceOffset;
                sourceY = y - sourceOffset;
                entries.push([779, sourceX], [780, sourceY]);
            }
            if (direction === 2) {
                sourceX = x;
                sourceY = y - sourceOffset;
                entries.push([779, sourceX], [780, sourceY]);
            }
            if (direction === 3) {
                sourceX = x - sourceOffset;
                sourceY = y - sourceOffset;
                entries.push([779, sourceX], [780, sourceY]);
            }
            if (direction === 4) {
                sourceX = x + sourceOffset;
                sourceY = y;
                entries.push([779, sourceX], [780, sourceY]);
            }
            if (direction === 6) {
                sourceX = x - sourceOffset;
                sourceY = y;
                entries.push([779, sourceX], [780, sourceY]);
            }
            if (direction === 7) {
                sourceX = x + sourceOffset;
                sourceY = y + sourceOffset;
                entries.push([779, sourceX], [780, sourceY]);
            }
            if (direction === 8) {
                sourceX = x;
                sourceY = y + sourceOffset;
                entries.push([779, sourceX], [780, sourceY]);
            }
            if (direction === 9) {
                sourceX = x - sourceOffset;
                sourceY = y + sourceOffset;
                entries.push([779, sourceX], [780, sourceY]);
            }
        }
        if (Number(readStateSlot(217) ?? 0) === 1) {
            sourceX = x;
            sourceY = y;
            entries.push([779, sourceX], [780, sourceY]);
        }
        entries.push(
            ['dtw-set-position', 0, 0],
            ['dtw-set-blend-mode', 2],
            ['dtw-draw-image', 18, sourceX, sourceY, 380, 400],
        );
        return entries;
    },
    func243: () => {
        const entries: StateDiffEntry[] = [
            ['dtw-debug-print', 243],
        ];
        let randomMapFlag = Adap.rnd(12);
        entries.push([86, randomMapFlag]);
        const currentFloor = Number(readStateSlot('current_floor') ?? 0);
        const specialFloor = Number(readStateSlot('special_floor') ?? 0);
        const dungeonNumber = Number(readStateSlot('dungeon_number') ?? 0);
        const finalFloor = Number(readStateSlot(20) ?? 0);
        let fixedFloor = Number(readStateSlot(70) ?? 0);
        if (currentFloor < 4) {
            randomMapFlag = 1;
            entries.push([86, randomMapFlag]);
        }
        if (specialFloor >= 1) {
            fixedFloor = 0;
            entries.push([70, fixedFloor]);
        }
        if (dungeonNumber === 1) {
            randomMapFlag = 1;
            entries.push([86, randomMapFlag]);
        }
        if (fixedFloor !== 0) {
            randomMapFlag = 0;
            entries.push([86, randomMapFlag]);
        }
        if (dungeonNumber === 1 && currentFloor === 12) entries.push([86, 0]);
        if (dungeonNumber === 2 && currentFloor === 30) entries.push([86, 0]);
        if (dungeonNumber === 3 && currentFloor === 99) entries.push([86, 0]);
        if (dungeonNumber === 5 && currentFloor === finalFloor) entries.push([86, 0]);
        if (specialFloor === 1) entries.push([86, 0]);
        if (specialFloor === 2) entries.push([86, 0]);
        if (specialFloor === 3) entries.push([86, 0]);
        if (specialFloor === 4) entries.push([86, 1]);
        if (specialFloor === 5) entries.push([86, 0]);
        if (specialFloor === 6) entries.push([86, 0]);
        if (specialFloor === 7) entries.push([86, 0]);
        if (specialFloor === 8) entries.push([86, 0]);
        if (specialFloor === 9) entries.push([86, 0]);
        return entries;
    },
    func245: () => {
        const entries: StateDiffEntry[] = [
            ['dtw-debug-print', 245],
        ];
        let roomKind = Adap.rnd(14);
        entries.push([1080, roomKind]);
        const dungeonNumber = Number(readStateSlot('dungeon_number') ?? 0);
        if (dungeonNumber <= 2 || dungeonNumber === 5) {
            roomKind = 0;
            entries.push([1080, roomKind]);
        }
        if (roomKind <= 6) entries.push([96, 1]);
        if (roomKind === 7) entries.push([96, 2]);
        if (roomKind === 8) entries.push([96, 3]);
        if (roomKind === 9) entries.push([96, 4]);
        if (roomKind === 10) entries.push([96, 5]);
        if (roomKind === 11) entries.push([96, 6]);
        if (roomKind === 12) entries.push([96, 7]);
        if (roomKind === 13) entries.push([96, 8]);
        const fixedRoomKind = Number(readStateSlot(70) ?? 0);
        if (fixedRoomKind === 1) entries.push([96, 1]);
        if (fixedRoomKind === 2) entries.push([96, 3]);
        if (fixedRoomKind === 3) entries.push([96, 4]);
        if (fixedRoomKind === 4) entries.push([96, 2]);
        if (fixedRoomKind === 8) entries.push([96, 5]);
        if (fixedRoomKind === 9) entries.push([96, 6]);
        if (fixedRoomKind === 10) entries.push([96, 7]);
        if (fixedRoomKind === 13) entries.push([96, 8]);
        if (fixedRoomKind === 99) entries.push([96, 9]);
        return entries;
    },
    func194: () => [
        ['menu-run', 'Configs.gameSpeed'],
    ],
    func195: () => [
        ['menu-run', 'Configs.gameSpeed'],
    ],
    func196: () => [
        ['menu-render', 'Configs.gameSpeed'],
    ],
    func477: () => [
        ['dtw-debug-print', 477],
        [221, 0],
        ['open_item_menue', 0],
        [231, 0],
        [234, 0],
        ['game-set-message', '荷物がいっぱいで持ちきれない', '', 7, 0, 0, 0],
        ['game-auto-draw', 3],
        ['core-call', 'Func.func009'],
    ],
    func481: () => [
        ['dtw-debug-print', 481],
        ['index-set', [['state-slot-ref', 233]], 0, [['index-ref', [['state-slot-ref', 78]], [['state-slot-ref', 2044]]]]],
        ['index-set', [['index-ref', [['state-slot-ref', 78]], [['state-slot-ref', 2044]]]], 0, 1234123],
        ['console-log', [['prop-ref', 'console']], [['index-ref', [['index-ref', [['state-slot-ref', 233]], 0]], 0]]],
    ],
    func205: () => cloneGeneratedStateDiff('func205'),
    func206: () => cloneGeneratedStateDiff('func206'),
    func207: () => cloneGeneratedStateDiff('func207'),
    func217: () => cloneGeneratedStateDiff('func217'),
    func024: () => cloneGeneratedStateDiff('func024'),
    func256: () => cloneGeneratedStateDiff('func256'),
    func258: () => cloneGeneratedStateDiff('func258'),
    func259: () => cloneGeneratedStateDiff('func259'),
    func260: () => cloneGeneratedStateDiff('func260'),
    func261: () => cloneGeneratedStateDiff('func261'),
    func262: () => cloneGeneratedStateDiff('func262'),
    func263: () => cloneGeneratedStateDiff('func263'),
    func264: () => cloneGeneratedStateDiff('func264'),
    func266: () => cloneGeneratedStateDiff('func266'),
    func267: () => cloneGeneratedStateDiff('func267'),
    func268: () => cloneGeneratedStateDiff('func268'),
    func269: () => cloneGeneratedStateDiff('func269'),
    func270: () => cloneGeneratedStateDiff('func270'),
    func271: () => cloneGeneratedStateDiff('func271'),
    func272: () => cloneGeneratedStateDiff('func272'),
    func273: () => cloneGeneratedStateDiff('func273'),
    func274: () => cloneGeneratedStateDiff('func274'),
    func275: () => cloneGeneratedStateDiff('func275'),
    func276: () => cloneGeneratedStateDiff('func276'),
    func277: () => cloneGeneratedStateDiff('func277'),
    func278: () => cloneGeneratedStateDiff('func278'),
    func279: () => cloneGeneratedStateDiff('func279'),
    func280: () => cloneGeneratedStateDiff('func280'),
    func281: () => cloneGeneratedStateDiff('func281'),
    func282: () => cloneGeneratedStateDiff('func282'),
    func283: () => cloneGeneratedStateDiff('func283'),
    func284: () => cloneGeneratedStateDiff('func284'),
    func285: () => cloneGeneratedStateDiff('func285'),
    func286: () => cloneGeneratedStateDiff('func286'),
    func287: () => cloneGeneratedStateDiff('func287'),
    func679: () => cloneGeneratedStateDiff('func679'),
    func335: () => cloneGeneratedStateDiff('func335'),
    func336: () => cloneGeneratedStateDiff('func336'),
    func386: () => cloneGeneratedStateDiff('func386'),
    func431: () => cloneGeneratedStateDiff('func431'),
    func1005: () => cloneGeneratedStateDiff('func1005'),
    func265: () => [
        ['dtw-debug-print', 265],
        [1096, 5],
        [1098, 5],
        [1100, 3],
        [1102, 3],
        [1082, 7],
        [1084, 5],
        [983, '#88888#'],
        [983, [['state-string-concat', 983, 0, '4.....6']]],
        [983, [['state-string-concat', 983, 0, '4.#.#.6']]],
        [983, [['state-string-concat', 983, 0, '4.....6']]],
        [983, [['state-string-concat', 983, 0, '#22222#']]],
    ],
    func293: () => cloneGeneratedStateDiff('func293'),
    func294: () => cloneGeneratedStateDiff('func294'),
    func295: () => cloneGeneratedStateDiff('func295'),
    func296: () => cloneGeneratedStateDiff('func296'),
    func297: () => cloneGeneratedStateDiff('func297'),
    func298: () => cloneGeneratedStateDiff('func298'),
    func299: () => cloneGeneratedStateDiff('func299'),
    func300: () => cloneGeneratedStateDiff('func300'),
    func301: () => cloneGeneratedStateDiff('func301'),
    func302: () => cloneGeneratedStateDiff('func302'),
    func303: () => cloneGeneratedStateDiff('func303'),
    func304: () => cloneGeneratedStateDiff('func304'),
    func305: () => cloneGeneratedStateDiff('func305'),
    func306: () => cloneGeneratedStateDiff('func306'),
    func307: () => cloneGeneratedStateDiff('func307'),
    func308: () => cloneGeneratedStateDiff('func308'),
    func309: () => cloneGeneratedStateDiff('func309'),
    func310: () => cloneGeneratedStateDiff('func310'),
    func311: () => cloneGeneratedStateDiff('func311'),
    func312: () => cloneGeneratedStateDiff('func312'),
    func313: () => cloneGeneratedStateDiff('func313'),
    func314: () => cloneGeneratedStateDiff('func314'),
    func315: () => cloneGeneratedStateDiff('func315'),
    func316: () => cloneGeneratedStateDiff('func316'),
    func317: () => cloneGeneratedStateDiff('func317'),
    func318: () => cloneGeneratedStateDiff('func318'),
    func319: () => cloneGeneratedStateDiff('func319'),
    func320: () => cloneGeneratedStateDiff('func320'),
    func321: () => cloneGeneratedStateDiff('func321'),
    func322: () => cloneGeneratedStateDiff('func322'),
    func0905: () => [
        ['dtw-object-size', 1],
        ['dtw-set-position', 800, 800],
        ['dtw-button', 'ダミー', [['prop-ref', 'Func.func0909']]],
    ],
    func0901: () => [
        ['data0', 9],
        ['data1', 9],
        ['dtw-clear-objects', [['state-slot-ref', 'data0']], [['state-slot-ref', 'data1']]],
        ['dtw-object-size', 60],
        ['dtw-set-position', 604, Number(readStateSlot(3525) ?? 0) + 22],
        ['dtw-combo-box', [['state-slot-ref', 3553]], 100, '修正値\n+1\n+2\n+3\n+4\n+5\n+6\n+7\n+8\n+9\n+10\n呪い'],
    ],
    func0902: () => [
        ['data0', 9],
        ['data1', 9],
        ['dtw-clear-objects', [['state-slot-ref', 'data0']], [['state-slot-ref', 'data1']]],
        ['dtw-object-size', 60],
        ['dtw-set-position', 604, Number(readStateSlot(3525) ?? 0) + 22],
        ['dtw-combo-box', [['state-slot-ref', 3554]], 100, '回数\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10'],
    ],
    func0903: () => [
        ['data0', 9],
        ['data1', 9],
        ['dtw-clear-objects', [['state-slot-ref', 'data0']], [['state-slot-ref', 'data1']]],
        ['dtw-object-size', 60],
        ['dtw-set-position', 604, Number(readStateSlot(3525) ?? 0) + 22],
        ['dtw-combo-box', [['state-slot-ref', 3555]], 100, '金額\n100G\n200G\n300G\n400G\n500G\n600G\n700G\n800G\n900G'],
    ],
    func0904: () => [
        ['data0', 9],
        ['data1', 9],
        ['dtw-clear-objects', [['state-slot-ref', 'data0']], [['state-slot-ref', 'data1']]],
        ['dtw-object-size', 1],
        ['dtw-set-position', 800, 800],
        ['dtw-button', 'ダミー', [['prop-ref', 'Func.func0909']]],
    ],
    func0906: () => [
        [3574, 0],
        ['dtw-object-size', 1],
        ['dtw-set-position', 800, 800],
        ['dtw-button', 'ダミー', [['prop-ref', 'Func.func0909']]],
    ],
    func0900: () => buildFunc0900StateDiff(),
    func0907: () => buildFunc0907StateDiff(),
    func0909: () => [
        ['core-call', 'Func.func0910'],
    ],
    func0911: () => {
        const entries: StateDiffEntry[] = [
            ['dtw-redraw', 0],
            ['core-call', 'Func.func0914'],
            ['core-call', 'Func.func0919'],
            ['core-call', 'Func.func0920'],
            ['core-call', 'Func.func0912'],
        ];
        if (Number(readStateSlot(3593) ?? 0) !== 0) {
            entries.push(['core-call', 'Func.func0926']);
        }
        entries.push(['dtw-redraw', 1], ['dtw-wait', 1]);
        return entries;
    },
    func0915: () => [
        ['dtw-object-size', 100],
        ['dtw-set-position', [['state-slot-ref', 3542]], Number(readStateSlot(3543) ?? 0) + 86],
        ['dtw-combo-box', [['state-slot-ref', 3559]], 100, '茶色迷宮\n青色迷宮\n黄色迷宮\n茶色洞窟\n青色洞窟\n黄色洞窟\n溶岩洞窟\n霧の館\n虹村屋敷\n吉良屋敷\nポンペイ\n下水道\n森(明)\n浜辺(明)\n砂漠(明)\n水の都(明)'],
    ],
    func0916: () => [
        ['core-call', 'Func.func0917'],
        ['y_axis_map_image', [['state-slot-ref', 3560]]],
        [3562, [['state-slot-ref', 3560]]],
        ['dtw-object-select', 0],
        ['core-call', 'Func.func0911'],
    ],
    func0917: () => {
        const yAxisByKind = [2, 6, 9, 5, 4, 24, 12, 13, 8, 14, 18, 3, 19, 11, 23, 15];
        const kind = Number(readStateSlot(3559) ?? -1);
        return kind >= 0 && kind < yAxisByKind.length ? [[3560, yAxisByKind[kind]]] : [];
    },
    func0920: () => buildFunc0920StateDiff(),
    func0924: () => {
        const entries: StateDiffEntry[] = [
            ['data0', '画面を初期化しますか？'],
            ['data1', 2],
            ['dtw-dialog', [['state-slot-ref', 'data0']], [['state-slot-ref', 'data1']], ''],
        ];
        if (Number(readStateSlot('stat') ?? 0) === 7) {
            entries.push(['core-call', 'Func.func0910']);
            return entries;
        }
        entries.push(
            [983, [['dtw-string-dim', 3000]]],
            [71, [['dtw-dim', 70, 70, null, null]]],
            [65, [['dtw-dim', 70, 70, null, null]]],
            [82, [['dtw-dim', 70, 70, null, null]]],
            [77, [['dtw-dim', 70, 70, null, null]]],
            [80, [['dtw-dim', 70, 70, null, null]]],
            [73, [['dtw-dim', 70, 70, null, null]]],
            [986, [['dtw-dim', 100]]],
            [486, [['dtw-dim', 80, 21, 30, null]]],
            [76, [['dtw-dim', 100, 5, 3, null]]],
            [74, [['dtw-dim', 70, 70, null, null]]],
            [75, [['dtw-dim', 20]]],
            [83, [['charactor-info-dim', 300]]],
            [78, [['item-info-dim', 300]]],
            [81, [['dtw-dim', 300, 7, null, null]]],
            ['core-call', 'Func.func0934'],
            [199, 2],
            [66, 26],
            [67, 15],
            [3572, 0],
            [3593, 0],
            ['core-call', 'Func.func0911'],
            ['core-call', 'Func.func0910'],
        );
        return entries;
    },
    func0927: () => [
        [3573, 0],
        ['core-call', 'Func.func0928'],
    ],
    func0928: () => buildFunc0928StateDiff(),
    func0933: () => buildFunc0933StateDiff(),
    func0939: () => {
        const entries: StateDiffEntry[] = [
            ['music-call', 'Music.func108'],
            [3761, 0],
            [375, 0],
            ['core-call', 'Func.func235'],
            ['dtw-on-exit', 0],
        ];
        if (Number(readStateSlot(3774) ?? 0) === 1) {
            entries.push(['dtw-change-directory', '問題']);
            if (Number(readStateSlot(539) ?? 0) !== 0) {
                entries.push(
                    [3775, '2'],
                    ['data', [['state-slot-ref', 3775]]],
                    ['dtw-save-file', [['state-slot-ref', 3635]], [['state-slot-ref', 'data']], 1, 0],
                );
            }
            entries.push([539, 0], [3774, 0], ['core-call', 'Func.func0942']);
            return entries;
        }
        entries.push([539, 0], ['core-call', 'Func.func0900']);
        return entries;
    },
    func0948: () => buildGeneratedSelectionStateDiff('func0948'),
    func0950: () => buildGeneratedSelectionStateDiff('func0950'),
    func0952: () => buildGeneratedSelectionStateDiff('func0952'),
    func0955: () => [
        ['window_id', 33],
        ['window_mode', -1],
        ['dtw-select-buffer', [['state-slot-ref', 'window_id']], [['state-slot-ref', 'window_mode']]],
        ['window_id', 0],
        ['window_mode', 1],
        ['dtw-select-buffer', [['state-slot-ref', 'window_id']], [['state-slot-ref', 'window_mode']]],
        ['core-call', 'Func.func009'],
    ],
    func0926: () => {
        const entries: StateDiffEntry[] = [
            ['dtw-set-color', 0, 0, 0],
            ['dtw-fill-rect', 50, 200, 330, 250],
            ['dtw-set-font', [['state-slot-ref', 'font_type']], 12],
            ['dtw-set-color', 255, 255, 255],
            ['dtw-set-position', 60, 210],
        ];
        const messageKind = Number(readStateSlot(3593) ?? 0);
        if (messageKind === 1) entries.push(['dtw-draw-text', 'これ以上は増やせません']);
        if (messageKind === 2) entries.push(['dtw-draw-text', 'ここには配置できません']);
        if (messageKind === 3) entries.push(['dtw-draw-text', 'これ以上個室を増やせません']);
        return entries;
    },
    func0956: () => {
        if (Number(readStateSlot('wparam') ?? 0) === 8) {
            return [
                ['dtw-show-window', [['state-slot-ref', 15]], 7],
            ];
        }
        return [];
    },
    func0959: () => {
        if (readStateSlot(3820) === '') {
            return [];
        }
        return [
            [3820, [['state-string-concat', 3820, 1, '話文']]],
            ['dtw-tcp-put', [['state-slot-ref', 3820]], [['state-slot-ref', 1050]]],
            ['dtw-tcp-put', '\n', [['state-slot-ref', 1050]]],
            ['dtw-select-buffer', 30],
            ['dtw-object-parameter', 0, ''],
            ['dtw-select-buffer', 0],
        ];
    },
    func0961: () => buildFuncPairedLogStateDiff('Func.func0962', 'Func.func0966'),
    func0962: () => buildFunc0962StateDiff(),
    func0963: () => buildFunc0963StateDiff(),
    func0964: () => buildFunc0964StateDiff(),
    func0965: () => {
        const entries: StateDiffEntry[] = [];
        if (Number(readStateSlot(408) ?? 0) >= 1) {
            entries.push(['core-call', 'Func.func0973']);
        }
        if (Number(readStateSlot(3867) ?? 0) === 1) {
            entries.push([3867, 0], ['core-call', 'Func.func0978']);
        }
        if (Number(readStateSlot(3868) ?? 0) === 1) {
            entries.push([3868, 0], ['core-call', 'Func.func0982']);
        }
        if (Number(readStateSlot(1046) ?? 0) >= 1) {
            entries.push(['core-call', 'Func.func0976']);
        }
        return entries;
    },
    func371: () => {
        const var833 = Number(readStateSlot(833) ?? 0);
        const entries: StateDiffEntry[] = [
            ['dtw-debug-print', 371],
        ];
        if (var833 === 0) {
            entries.push([1678, 1]);
        }
        if (var833 >= 1) {
            entries.push([1678, Math.floor(var833 / 10) + 1]);
        }
        entries.push([1679, 1]);
        entries.push(['core-call', 'Func.func372']);
        return entries;
    },
    func0966: () => buildFunc0966StateDiff(),
    func0973: () => [
        ['core-call', 'Func.func0968'],
    ],
    func0974: () => [
        ['game-set-message', 'ディアボロはここよーッ！', 'ここにいるわよォ～～～ッ！', 7, 0, 0, 1],
        [3864, '女帝'],
        ['dtw-tcp-put', '女帝', [['state-slot-ref', 1050]]],
        ['dtw-tcp-put', '\n', [['state-slot-ref', 1050]]],
        ['core-call', 'Func.func340'],
        ...(Number(readStateSlot(2254) ?? 0) === 1
            ? [[2254, 0], ['core-call', 'Func.func508']] as StateDiffEntry[]
            : []),
        [217, 1],
        ['core-call', 'Func.func019'],
    ],
    func0977: () => [
        [3867, 1],
    ],
    func0979: () => buildFunc0979StateDiff(),
    func0981: () => [
        [3868, 1],
    ],
    func0983: () => buildFunc0983StateDiff(),
    func0984: () => buildFunc0984StateDiff(),
    func0987: () => buildFunc0987StateDiff(),
    func0989: () => buildFunc0989StateDiff(),
    func0990: () => buildFunc0990StateDiff(),
    func0991: () => buildFunc0991StateDiff(),
    func0992: () => buildFunc0992StateDiff(),
    func0993: () => buildFunc0993StateDiff(),
    func0999: () => buildFunc0999StateDiff(),
};

function buildFunc0999StateDiff(): StateDiffEntry[] {
    const keyState = [['state-slot-ref', 3920]];
    const previousKeyState = [['state-slot-ref', 3922]];
    return [
        ['dtw-debug-print', 999],
        ['dtw-wait', 1],
        [3920, [['dtw-read-key-state', [['state-slot-ref', 727]]]]],
        [3921, keyState],
        [3916, [['bitwise-xor', keyState, [['bitwise-and', previousKeyState, keyState]]]]],
        [3923, [['bitwise-xor', keyState, [['bitwise-and', previousKeyState, previousKeyState]]]]],
        [3922, keyState],
    ];
}

function buildFunc0933StateDiff(): StateDiffEntry[] {
    const tile = readIndexedState(readIndexedState(readStateSlot(71), readStateSlot(3768)), readStateSlot(3769));
    return [
        [3766, [21, 22, 23, 24].includes(Number(tile)) ? 14 : tile],
    ];
}

function buildLogLineColorStateDiff(rules: Array<[needle: string, color: string]>): StateDiffEntry[] {
    const message = String(readStateSlot(3863) ?? '');
    const entries: StateDiffEntry[] = [[3865, '行白']];
    for (const [needle, color] of rules) {
        if (message.indexOf(needle, 0) !== -1) {
            entries.push([3865, color]);
        }
    }
    return entries;
}

function buildFunc0962StateDiff(): StateDiffEntry[] {
    return buildLogLineColorStateDiff([
        ['やっつけた', '行水'],
        ['ﾃﾞｨｱﾎﾞﾛはﾚﾍﾞﾙ', '行青'],
        ['モンスターハウスだ！', '行黄'],
        ['ﾊﾞｯﾄﾞ･ｶﾝﾊﾟﾆｰ･ﾊｳｽ だ！', '行黄'],
        ['ﾊｲｳｪｲｽﾀｰ･ﾙｰﾑ だ！', '行黄'],
        ['吸血鬼ハウスだ！', '行黄'],
        ['スタンドハウスだ！', '行黄'],
        ['杜王町ハウスだ！', '行黄'],
        ['水族館だ！', '行黄'],
        ['ファイトクラブだッ！', '行黄'],
        ['広大な砂漠だ！', '行黄'],
        ['幻覚の迷宮だ！', '行黄'],
        ['を踏んだ', '行茶'],
        ['地面に何か書いてある。', '行茶'],
        ['ﾃﾞｨｱﾎﾞﾛ  再起不能', '行赤'],
        ['ﾃﾞｨｱﾎﾞﾛは考えるのをやめた。', '行赤'],
        ['さびしいよォォォォ……ボス', '行赤'],
        ['電話ください………', '行赤'],
        ['」は', '行緑'],
        ['手で運ばれていった', '行緑'],
        ['「イヒヒヒヒ', '行緑'],
        ['注文しておいたよッ！」', '行緑'],
        ['ディアボロはここよーッ！', '行緑'],
        ['ここにいるわよォ～～～ッ！', '行緑'],
    ]);
}

function buildFunc0963StateDiff(): StateDiffEntry[] {
    const currentFloor = readStateSlot('current_floor');
    const tile = readIndexedState(readIndexedState(readStateSlot(73), readStateSlot(66)), readStateSlot(67));
    const entries: StateDiffEntry[] = [
        [3864, `行橙ﾃﾞｨｱﾎﾞﾛは${currentFloor}階に降りた`],
    ];
    if (Number(tile) === 2) {
        entries.push([3864, `行橙ﾃﾞｨｱﾎﾞﾛは${currentFloor}階に上った`]);
    }
    entries.push(
        ['dtw-tcp-put', [['state-slot-ref', 3864]], [['state-slot-ref', 1050]]],
        ['dtw-tcp-put', '\n', [['state-slot-ref', 1050]]],
        ['core-call', 'Func.func0966'],
    );
    return entries;
}

function buildFuncPairedLogStateDiff(colorFunctionName: string, tailFunctionName: string): StateDiffEntry[] {
    const messages = readStateSlot(494);
    const first = readIndexedState(messages, 1);
    const second = readIndexedState(messages, 2);
    const entries: StateDiffEntry[] = [];
    if (first !== '') {
        entries.push(
            [3863, first],
            ['core-call', colorFunctionName],
            [3864, [['string-concat', [['state-slot-ref', 3865]], String(first ?? '')]]],
            ['dtw-tcp-put', [['state-slot-ref', 3864]], [['state-slot-ref', 1050]]],
            ['dtw-tcp-put', '\n', [['state-slot-ref', 1050]]],
        );
    }
    if (second !== '') {
        entries.push(
            [3863, second],
            ['core-call', colorFunctionName],
            [3866, [['string-concat', [['state-slot-ref', 3865]], String(second ?? '')]]],
            ['dtw-tcp-put', [['state-slot-ref', 3866]], [['state-slot-ref', 1050]]],
            ['dtw-tcp-put', '\n', [['state-slot-ref', 1050]]],
        );
    }
    entries.push(['core-call', tailFunctionName]);
    return entries;
}

function buildFunc0989StateDiff(): StateDiffEntry[] {
    return buildFuncPairedLogStateDiff('Func.func0990', 'Func.func0988');
}

function buildFunc0979StateDiff(): StateDiffEntry[] {
    const entityIndex = readStateSlot(2194);
    const entity = readIndexedState(readStateSlot(83), entityIndex);
    if (!entity) return [];

    const state = {
        kind: Number(readIndexedState(entity, 0) ?? 0),
        y: readIndexedState(entity, 1),
        x: readIndexedState(entity, 2),
        var3: readIndexedState(entity, 3),
        var13: Number(readIndexedState(entity, 13) ?? 0),
        var14: readIndexedState(entity, 14),
        var15: readIndexedState(entity, 15),
        var17: readIndexedState(entity, 17),
        var19: readIndexedState(entity, 19),
        var20: readIndexedState(entity, 20),
        var23: readIndexedState(entity, 23),
        var24: readIndexedState(entity, 24),
        var30: readIndexedState(entity, 30),
        var31: Number(readIndexedState(entity, 31) ?? 0),
        var39: readIndexedState(entity, 39),
    };
    if (
        state.var31 === 4 ||
        state.var31 === 5 ||
        state.var13 !== 0 ||
        Number(readStateSlot('time_paused_count') ?? 0) !== 0 ||
        Number(readStateSlot('time_paused') ?? 0) !== 0
    ) {
        return [];
    }
    if ([20, 132, 143, 90, 96, 91, 92].includes(state.kind)) {
        return [];
    }

    const defeatedState = [
        state.kind,
        state.var39,
        state.var3,
        state.var14,
        state.var15,
        state.var17,
        state.var19,
        state.var20,
        state.var23,
        state.var24,
        state.var30,
    ].join(',');
    const mapRow = readIndexedState(readStateSlot(82), state.y);
    return [
        [3888, defeatedState],
        [3864, `倒敵${defeatedState}`],
        ['dtw-tcp-put', [['state-slot-ref', 3864]], [['state-slot-ref', 1050]]],
        ['dtw-tcp-put', '\n', [['state-slot-ref', 1050]]],
        [3889, state.y],
        [3890, state.x],
        ['index-set', mapRow, [['state-slot-ref', 3890]], 0],
        ['index-set', entity, 0, 0],
        ['index-set', entity, 1, 0],
        ['index-set', entity, 2, 0],
        [3887, 1],
    ];
}

function buildFunc0990StateDiff(): StateDiffEntry[] {
    return buildLogLineColorStateDiff([
        ['やっつけた', '行水'],
        ['ﾃﾞｨｱﾎﾞﾛはﾚﾍﾞﾙ', '行青'],
        ['モンスターハウスだ！', '行黄'],
        ['ﾊﾞｯﾄﾞ･ｶﾝﾊﾟﾆｰ･ﾊｳｽ だ！', '行黄'],
        ['ﾊｲｳｪｲｽﾀｰ･ﾙｰﾑ だ！', '行黄'],
        ['吸血鬼ハウスだ！', '行黄'],
        ['スタンドハウスだ！', '行黄'],
        ['杜王町ハウスだ！', '行黄'],
        ['水族館だ！', '行黄'],
        ['ファイトクラブだッ！', '行黄'],
        ['広大な砂漠だ！', '行黄'],
        ['幻覚の迷宮だ！', '行黄'],
        ['西戸ハウスだ！', '行黄'],
        ['を踏んだ', '行茶'],
        ['地面に何か書いてある。', '行茶'],
        ['ﾃﾞｨｱﾎﾞﾛ  再起不能', '行赤'],
        ['ﾃﾞｨｱﾎﾞﾛは考えるのをやめた。', '行赤'],
        ['さびしいよォォォォ……ボス', '行赤'],
        ['電話ください………', '行赤'],
        ['」は', '行緑'],
        ['手で運ばれていった', '行緑'],
    ]);
}

function buildFunc0900StateDiff(): StateDiffEntry[] {
    const entries: StateDiffEntry[] = [];

    if (Number(readStateSlot(637) ?? 0) >= 1) {
        entries.push(
            [637, 0],
            ['window_id', 37],
            ['window_mode', -1],
            ['dtw-select-buffer', [['state-slot-ref', 'window_id']], [['state-slot-ref', 'window_mode']]],
            ['dtw-screen', 0, 340, 340, 2],
            ['dtw-set-window-long', [['state-slot-ref', 'hwnd']], -8, [['state-slot-ref', 15]]],
        );
        if (Number(readStateSlot(640) ?? 0) === 0) {
            entries.push([10, 0], ['dtw-resize-window', 340, 340]);
        }
        if (Number(readStateSlot(640) ?? 0) === 1) {
            entries.push([640, 0], [10, 1], ['dtw-resize-window', 680, 680]);
        }
        entries.push(
            ['window_id', 0],
            ['window_mode', 2],
            ['dtw-select-buffer', [['state-slot-ref', 'window_id']], [['state-slot-ref', 'window_mode']]],
            ['dtw-change-display'],
        );
    }

    const x0 = 353;
    const y0 = 50;
    const x1 = x0;
    const y1 = y0 + 44;
    const x2 = x0;
    const y2 = y1 + 44;
    const x3 = x1 + 44;
    const y3 = y1;
    const x4 = x2 + 44;
    const y4 = y2;
    const x5 = x4 + 44;
    const y5 = y4;
    const x6 = x3 + 44;
    const y6 = y3;
    const x7 = x6 + 44;
    const y7 = y6;
    const x8 = x5 + 44;
    const y8 = y5;
    const var3542 = x7 + 40 + 20;
    const var3543 = y2 + 60;

    entries.push(
        ['dtw-on-exit', 0],
        [3510, x0],
        [3511, y0],
        [3512, x1],
        [3513, y1],
        [3514, x2],
        [3515, y2],
        [3516, x3],
        [3517, y3],
        [3518, x4],
        [3519, y4],
        [3520, x5],
        [3521, y5],
        [3522, x6],
        [3523, y6],
        [3524, x7],
        [3525, y7],
        [3526, x8],
        [3527, y8],
        [3528, x7],
        [3529, y7 - 44],
        [3530, x0],
        [3531, y2 + 60],
        [3532, 3],
        [3533, 2],
        [3534, Number(readStateSlot(31) ?? 0) - 3],
        [3535, Number(readStateSlot(32) ?? 0) - 4],
        [3536, Number(readStateSlot(31) ?? 0) - 2],
        [3537, Number(readStateSlot(32) ?? 0) - 3],
        [3538, x0 - 5],
        [3539, y2 + 60 - 2],
        [3540, 185],
        [3541, 135],
        [3542, var3542],
        [3543, var3543],
        [869, 1],
        ['core-call', 'Func.func0947'],
        [869, 0],
        ['core-call', 'Func.func0949'],
        ['core-call', 'Func.func0951'],
        ['dtw-object-size', 1],
        ['dtw-set-position', 800, 800],
        ['dtw-button', 'ダミー', [['prop-ref', 'Func.func0909']]],
        ['dtw-object-size', 50],
        ['dtw-set-position', x0 + 45, y0],
        ['dtw-combo-box', [['state-slot-ref', 3544]], 100, '部屋\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12'],
        [3545, 0],
        [3546, 0],
        [873, 0],
        [3547, 0],
        [3548, 0],
        [3549, 0],
        [3550, 0],
        [3551, 0],
        ['dtw-object-size', 135],
        ['dtw-set-position', x7 + 44, y7 - 44],
        ['dtw-combo-box', 0, 100, [['state-slot-ref', 890]]],
        ['dtw-set-position', x7 + 44, y7],
        ['dtw-combo-box', 0, 100, [['state-slot-ref', 874]]],
        ['dtw-set-position', x8 + 44, y8],
        ['dtw-combo-box', 0, 100, [['state-slot-ref', 886]]],
        ['dtw-object-size', 60],
        ['dtw-set-position', var3542, var3543 + 28],
        ['dtw-button', '読込', [['prop-ref', 'Func.func0927']]],
        ['dtw-set-position', var3542, var3543 + 56],
        ['dtw-button', '保存', [['prop-ref', 'Func.func0931']]],
        ['dtw-set-position', var3542, var3543],
        ['dtw-button', '実行', [['prop-ref', 'Func.func0930']]],
        ['dtw-object-size', 100],
        ['dtw-set-position', var3542, var3543 + 114],
        [3552, 0],
        ['dtw-combo-box', 0, 100, 'フラグ変更\n未クリア(白)\nクリア済(黄)\n製作中(赤)\n完成(水色)'],
        [3553, 0],
        [3554, 0],
        [3555, 0],
        [3556, 0],
        [3557, 0],
        [3558, 0],
        ['core-call', 'Func.func0905'],
        ['dtw-object-size', 60],
        ['dtw-set-position', var3542 + 70, var3543 + 56],
        ['dtw-button', '戻る', [['prop-ref', 'Func.func0908']]],
        ['dtw-set-position', var3542 + 70, var3543 + 28],
        ['dtw-button', '初期化', [['prop-ref', 'Func.func0924']]],
        [3559, 0],
        [3560, 0],
        [3561, 0],
        ['core-call', 'Func.func0915'],
        ['core-call', 'Func.func0906'],
        ['dtw-resize-window', 340, 340],
        ['y_axis_map_image', 2],
        [3562, [['state-slot-ref', 'y_axis_map_image']]],
        [3563, 1],
        [3564, 1],
        [3565, 6],
        [3544, 1],
        [3566, 1],
        [3567, 0],
        [3568, 0],
        [3569, 1],
        [3570, 0],
        [3571, ''],
        [626, 1],
    );

    if (Number(readStateSlot(3572) ?? 0) === 1) {
        entries.push([3573, 1], ['core-call', 'Func.func0928']);
        return entries;
    }
    if (Number(readStateSlot(3572) ?? 0) === 0) {
        entries.push(['core-call', 'Func.func0934']);
    }
    entries.push(['core-call', 'Func.func0910']);
    return entries;
}

function buildFunc0991StateDiff(): StateDiffEntry[] {
    const currentFloor = readStateSlot('current_floor');
    const tile = readIndexedState(readIndexedState(readStateSlot(73), readStateSlot(66)), readStateSlot(67));
    const entries: StateDiffEntry[] = [
        [3864, `行橙ﾃﾞｨｱﾎﾞﾛは${currentFloor}階に降りた`],
    ];
    if (Number(tile) === 2) {
        entries.push([3864, `行橙ﾃﾞｨｱﾎﾞﾛは${currentFloor}階に上った`]);
    }
    entries.push(['dtw-tcp-put', [['state-slot-ref', 3864]], [['state-slot-ref', 1050]]]);
    entries.push(['dtw-tcp-put', '\n', [['state-slot-ref', 1050]]]);
    entries.push(['core-call', 'Func.func0988']);
    return entries;
}

function buildFunc0984StateDiff(): StateDiffEntry[] {
    const networkState = Number(readStateSlot(407) ?? 0);
    if (networkState >= 1) {
        return [
            [407, 0],
            ['dtw-on-key', 0],
            ['dtw-network-close', [['state-slot-ref', 1050]]],
            ['window_id', 33],
            ['window_mode', -1],
            ['dtw-select-buffer', [['state-slot-ref', 'window_id']], [['state-slot-ref', 'window_mode']]],
            ['window_id', 30],
            ['window_mode', -1],
            ['dtw-select-buffer', [['state-slot-ref', 'window_id']], [['state-slot-ref', 'window_mode']]],
            ['window_id', 0],
            ['window_mode', 1],
            ['dtw-select-buffer', [['state-slot-ref', 'window_id']], [['state-slot-ref', 'window_mode']]],
            ['core-call', 'Func.func193'],
        ];
    }
    if (networkState === 0) {
        return [
            [509, 0],
            [499, 0],
            ['core-call', 'Func.func0953'],
        ];
    }
    return [
        ['control-stop'],
    ];
}

function buildFunc0920StateDiff(): StateDiffEntry[] {
    const mouseX = Number(readStateSlot('mousex') ?? 0);
    const mouseY = Number(readStateSlot('mousey') ?? 0);
    const imageKind = Number(readStateSlot(3565) ?? 0);
    const tileY = Number(readStateSlot(3562) ?? 0) * 40;
    const entries: StateDiffEntry[] = [
        ['dtw-set-blend-mode', 2],
        ['dtw-set-position', Number(readStateSlot(3563) ?? 0) * 40 + 10, Number(readStateSlot(3564) ?? 0) * 40 + 10],
        ['dtw-draw-image', 3, 240, 120, 40, 40],
        ['dtw-set-position', mouseX - 3, mouseY - 3],
    ];

    if (imageKind === 0) entries.push(['dtw-draw-image', 5, 0, tileY, 40, 40]);
    if (imageKind === 1) entries.push(['dtw-draw-image', 5, 120, tileY, 40, 40]);
    if (imageKind === 2) entries.push(['dtw-draw-image', 5, 240, tileY, 40, 40]);
    if (imageKind === 3) entries.push(['dtw-draw-image', 5, 1520, tileY, 40, 40]);
    if (imageKind === 4) entries.push(['dtw-draw-image', 3, 280, 120, 40, 40]);
    if (imageKind === 5) entries.push(['dtw-draw-image', 5, 1200, tileY, 40, 40]);
    if (imageKind === 6) entries.push(['dtw-draw-image', 3, 40, 0, 40, 40]);
    if (imageKind === 7) {
        const enemyId = readIndexedState(readStateSlot(3591), readStateSlot(3545));
        entries.push(
            [1642, 1],
            ['index-set', [['index-ref', [['state-slot-ref', 83]], 0]], 0, enemyId],
            ['index-set', [['index-ref', [['state-slot-ref', 83]], 0]], 5, 2],
            [1641, 0],
            [3611, enemyId],
            [1640, 2],
            ['core-call', 'Func.func567'],
            [1642, 0],
        );
    }
    if (imageKind === 8) {
        const itemId = readIndexedState(readStateSlot(884), readStateSlot(873));
        entries.push(
            ['index-set', [['index-ref', [['state-slot-ref', 78]], 0]], 0, itemId],
            ['belongings_item_list', itemId],
            [3612, [['state-slot-ref', 'belongings_item_list']]],
            ['core-call', 'Func.func397'],
        );
    }
    if (imageKind === 9) {
        entries.push(
            [888, readIndexedState(readStateSlot(3599), readStateSlot(3548))],
            [3613, [['state-slot-ref', 888]]],
            ['core-call', 'Func.func539'],
        );
    }

    if (imageKind >= 0 && imageKind <= 3) {
        entries.push(
            ['dtw-set-position', mouseX + 3, mouseY + 25],
            ['dtw-set-font', [['state-slot-ref', 'font_type']], 11],
            ['dtw-set-color', 255, 255, 255],
        );
        if (imageKind === 0) {
            const roomId = Number(readStateSlot(3569) ?? 0);
            entries.push(['dtw-draw-text', roomId < 10 ? [['i18n-format', '部屋 {0}', roomId]] : [['i18n-format', '部屋{0}', roomId]]]);
        }
        if (imageKind === 1) entries.push(['dtw-draw-text', '通路']);
        if (imageKind === 2) entries.push(['dtw-draw-text', '壁']);
        if (imageKind === 3) entries.push(['dtw-draw-text', '水']);
    }

    entries.push(['dtw-set-position', mouseX - 3, mouseY - 3]);
    if (imageKind >= 0 && imageKind <= 3) {
        entries.push(['dtw-draw-image', 3, 160, 120, 40, 40]);
    }
    return entries;
}

function buildFunc0928StateDiff(): StateDiffEntry[] {
    const entries: StateDiffEntry[] = [];
    const mode = Number(readStateSlot(3573) ?? 0);

    if (mode === 0) {
        entries.push(
            ['data0', 'btq'],
            ['data1', 16],
            ['dtw-dialog', [['state-slot-ref', 'data0']], [['state-slot-ref', 'data1']], '魔少年の問題ファイル'],
        );
        if (Number(readStateSlot('stat') ?? 0) === 0) {
            entries.push(['core-call', 'Func.func0910']);
            return entries;
        }
        entries.push([3635, [['state-slot-ref', 'refstr']]]);
    }

    entries.push(
        ['dtw-change-directory', [['state-slot-ref', 30]]],
        [983, [['dtw-string-dim', 3000]]],
        [71, [['dtw-dim', 70, 70, null, null]]],
        [65, [['dtw-dim', 70, 70, null, null]]],
        [82, [['dtw-dim', 70, 70, null, null]]],
        [77, [['dtw-dim', 70, 70, null, null]]],
        [80, [['dtw-dim', 70, 70, null, null]]],
        [73, [['dtw-dim', 70, 70, null, null]]],
        [986, [['dtw-dim', 100]]],
        [486, [['dtw-dim', 80, 21, 30, null]]],
        [76, [['dtw-dim', 100, 5, 3, null]]],
        [74, [['dtw-dim', 70, 70, null, null]]],
        [75, [['dtw-dim', 20]]],
        [83, [['charactor-info-dim', 300]]],
        [78, [['item-info-dim', 300]]],
        [81, [['dtw-dim', 300, 7, null, null]]],
        ['core-call', 'Func.func0940'],
        ['core-call', 'Func.func0929'],
        ['data0', 12],
        ['data1', null],
        ['dtw-clear-objects', [['state-slot-ref', 'data0']], [['state-slot-ref', 'data1']]],
        ['core-call', 'Func.func0915'],
        ['core-call', 'Func.func0916'],
        ['dtw-object-select', 0],
        [199, 2],
        [66, 26],
        [67, 15],
    );

    if (mode === 1) {
        entries.push(
            [66, [['state-slot-ref', 3636]]],
            [67, [['state-slot-ref', 3637]]],
        );
    }

    entries.push(
        [3572, 1],
        ['core-call', 'Func.func0910'],
    );
    return entries;
}

function readIndexedState(target: unknown, key: unknown): unknown {
    if (target == null) return undefined;
    const object = target as Record<string | number, unknown>;
    const direct = object[key as string | number];
    if (direct !== undefined) return direct;
    const numericKey = typeof key === 'number'
        ? key
        : typeof key === 'string' && /^\d+$/.test(key)
            ? Number(key)
            : null;
    return numericKey == null ? undefined : object[`Var${numericKey}`];
}

const FUNC0983_DISC_NAMES: Record<number, string> = {
    100: 'ｽﾀｰ･ﾌﾟﾗﾁﾅのDISC',
    101: 'ｼﾙﾊﾞｰﾁｬﾘｵｯﾂのDISC',
    102: 'ｷﾝｸﾞ･ｸﾘﾑｿﾞﾝのDISC',
    103: 'ｴｺｰｽﾞACT3のDISC',
    104: 'ｻﾞ･ﾊﾝﾄﾞのDISC',
    105: 'ﾁﾘﾍﾟｯﾊﾟｰのDISC',
    106: 'ｸﾚｲｼﾞｰ･DのDISC',
    107: 'ﾃﾞｽ･13のDISC',
    108: 'ｽﾃｨｯｷｰﾌｨﾝｶﾞｰｽﾞのDISC',
    109: 'ﾏｼﾞｼｬﾝｽﾞﾚｯﾄﾞのDISC',
    110: 'ｽﾃｨｯｷｰﾌｨﾝｶﾞｰｽﾞのDISC',
    111: 'ｻﾞ･ﾜｰﾙﾄﾞのDISC',
    112: 'ｷﾗｰ･ｸｨｰﾝのDISC',
    113: 'ｸﾗｯｼｭのDISC',
    114: 'ﾎﾜｲﾄｽﾈｲｸのDISC',
    115: 'G･ｴｸｽﾍﾟﾘｴﾝｽのDISC',
    116: 'ﾊｰﾐｯﾄﾊﾟｰﾌﾟﾙのDISC',
    117: 'ﾀﾞｰｸﾌﾞﾙｰﾑｰﾝのDISC',
    118: 'ﾀﾞｲﾊﾞｰﾀﾞｳﾝのDISC',
    119: 'ｽﾊﾟｲｽ･ｶﾞｰﾙのDISC',
    120: 'ｽﾄｰﾝ･ﾌﾘｰのDISC',
    121: 'ﾊﾟｰﾌﾟﾙ･ﾍｲｽﾞのDISC',
    122: 'ｱﾇﾋﾞｽ神のDISC',
    123: 'ｸﾘｰﾑのDISC',
    124: 'ﾑｰﾃﾞｨｰﾌﾞﾙｰｽのDISC',
    125: 'ﾘﾄﾙ･ﾌｨｰﾄのDISC',
    126: 'C-MOONのDISC',
    200: 'ｽｰﾊﾟｰﾌﾗｲのDISC',
    201: 'ｲｴﾛｰﾃﾝﾊﾟﾗﾝｽのDISC',
    202: 'ﾎﾜｲﾄｱﾙﾊﾞﾑのDISC',
    203: 'ｻﾞ･ﾌｰﾙのDISC',
    204: 'ｼｱｰﾊｰﾄｱﾀｯｸのDISC',
    205: 'ｸﾗﾌﾄﾜｰｸのDISC',
    206: 'ｵｱｼｽのDISC',
    207: 'ｸﾞﾚｲﾄﾌﾙ･ﾃﾞｯﾄﾞのDISC',
    210: 'ﾊｲﾌﾟﾘｴｽﾃｽのDISC',
    211: 'ﾄﾞｷﾞｰ･ｽﾀｲﾙのDISC',
    212: 'ﾄﾞｩｰﾋﾞｰ･ﾜｩ!のDISC',
    213: 'ﾋﾞﾀﾐﾝCのDISC',
    214: 'ﾏﾘﾘﾝ･ﾏﾝｿﾝのDISC',
    215: 'ﾎﾜｲﾄｽﾈｲｸのDISC',
    216: 'ｽﾑｰｽ･ｵﾍﾟﾚｲﾀｰｽﾞのDISC',
    217: 'ｵｼﾘｽ神のDISC',
    218: 'のDISC',
    222: 'ﾁｹｯﾄ･ｩ･ﾗｲﾄﾞのDISC',
    223: 'D4CのDISC',
    224: 'S･C･ﾚｸｲｴﾑのDISC',
    300: 'ﾊﾟｰﾙ･ｼﾞｬﾑのDISC',
    301: 'ﾊｰｳﾞｪｽﾄのDISC',
    302: 'ﾊｲｳｪｲ･ﾄｩ･ﾍﾙのDISC',
    303: 'ﾄﾞﾗｺﾞﾝｽﾞﾄﾞﾘｰﾑのDISC',
    304: 'ｳｪｻﾞｰﾘﾎﾟｰﾄのDISC',
    305: 'ｼﾝﾃﾞﾚﾗのDISC',
    306: 'ﾏﾝﾊｯﾀﾝﾄﾗﾝｽﾌｧｰのDISC',
    308: 'ｴﾎﾞﾆｰ･ﾃﾞﾋﾞﾙのDISC',
    309: 'ｿﾌﾄ･ﾏｼｰﾝのDISC',
    310: 'ｴﾝﾌﾟﾚｽのDISC',
    311: 'ﾁｰﾌﾟ･ﾄﾘｯｸのDISC',
    312: 'ｴｱﾛｽﾐｽのDISC',
    313: 'ﾊｲｳｪｲ･ｽﾀｰのDISC',
    314: 'ｽﾄﾚｲ･ｷｬｯﾄのDISC',
    315: 'ｴﾋﾟﾀﾌのDISC',
    316: 'ｻﾊﾞｲﾊﾞｰのDISC',
    317: 'ｷｯｽのDISC',
    318: 'ｼﾞｬﾝﾋﾟﾝJﾌﾗｯｼｭのDISC',
    319: 'ﾎﾞｰｲIIﾏﾝのDISC',
    320: 'ﾒﾀﾘｶのDISC',
    321: 'B･D･ｻﾞ･ﾊｳｽのDISC',
    393: 'ﾎﾞﾍﾐｱﾝﾗﾌﾟｿﾃﾞｨのDISC',
    394: 'ｷﾗｰﾀｲｶﾞｰｸｲｰﾝのDISC',
    395: 'ﾊﾞｲﾂｧ･ﾀﾞｽﾄのDISC',
    396: 'ﾒｲﾄﾞ･ｲﾝ･ﾍﾌﾞﾝのDISC',
    397: 'ﾍﾋﾞｰ･ｳｪｻﾞｰのDISC',
    398: 'ｽﾀﾌﾟﾗｻﾞﾜｰﾙﾄﾞのDISC',
    399: 'G･E･ﾚｸｲｴﾑのDISC',
    400: 'ﾊｲｴﾛﾌｧﾝﾄｸﾞﾘｰﾝのDISC',
    401: 'ﾌｰ･ﾌｧｲﾀｰｽﾞのDISC',
    402: 'ｴﾝﾍﾟﾗｰのDISC',
    403: 'ｾｯｸｽﾋﾟｽﾄﾙｽﾞのDISC',
    404: 'ﾎﾙｽ神のDISC',
    405: 'ｴｺｰｽﾞACT2のDISC',
    406: 'ｴｺｰｽﾞACT1のDISC',
    407: 'ﾊｲｴﾛﾌｧﾝﾄｴﾒﾗﾙﾄﾞのDISC',
    408: 'ﾏﾝ･ｲﾝ･ｻﾞ･ﾐﾗｰのDISC',
    409: 'ﾗﾊﾞｰｽﾞのDISC',
    411: 'ﾀﾜｰ･ｵﾌﾞ･ｸﾞﾚｰのDISC',
    412: 'ﾍﾌﾞﾝｽﾞﾄﾞｱｰのDISC',
    414: 'ﾀｽｸact2のDISC',
    415: 'ﾀｽｸact1のDISC',
    416: 'ﾀｽｸact3のDISC',
    425: 'ﾉｰﾍﾞﾝﾊﾞｰ･ﾚｲﾝのDISC',
};

function buildFunc0983StateDiff(): StateDiffEntry[] {
    const itemId = Number(readStateSlot(3861) ?? 0);
    const entries: StateDiffEntry[] = [
        [3862, ''],
    ];
    const name = FUNC0983_DISC_NAMES[itemId];
    if (name !== undefined) {
        entries.push([3862, name]);
    }
    return entries;
}

function buildFunc0992StateDiff(): StateDiffEntry[] {
    const dungeonNumber = Number(readStateSlot('dungeon_number') ?? 0);
    const entries: StateDiffEntry[] = [];
    if (dungeonNumber === 1) entries.push([3864, '行橙ﾃﾞｨｱﾎﾞﾛはホテルの外に出た']);
    if (dungeonNumber === 2) entries.push([3864, '行橙ﾃﾞｨｱﾎﾞﾛはレクイエムの大迷宮に入った']);
    if (dungeonNumber === 3) entries.push([3864, '行橙ﾃﾞｨｱﾎﾞﾛはさらなる試練に向かった']);
    if (dungeonNumber === 4) entries.push([3864, '行橙ﾃﾞｨｱﾎﾞﾛは一巡後の世界へ進んだ']);
    if (dungeonNumber === 5) entries.push([3864, '行橙ﾃﾞｨｱﾎﾞﾛは鉄獄に入った']);
    if (dungeonNumber === 6) entries.push([3864, '行橙ﾃﾞｨｱﾎﾞﾛは白蛇の祠に入った']);
    if (dungeonNumber === 7) entries.push([3864, '行橙ﾃﾞｨｱﾎﾞﾛは絶頂の世界に向かった']);
    if (dungeonNumber === 8) entries.push([3864, '行橙ﾃﾞｨｱﾎﾞﾛはオシリス神の祠に向かった']);
    if (dungeonNumber === 9) entries.push([3864, '行橙ﾃﾞｨｱﾎﾞﾛはホテル裏の洞窟に向かった']);
    entries.push(['dtw-tcp-put', [['state-slot-ref', 3864]], [['state-slot-ref', 1050]]]);
    entries.push(['dtw-tcp-put', '\n', [['state-slot-ref', 1050]]]);
    entries.push(['core-call', 'Func.func0988']);
    return entries;
}

function buildFunc0964StateDiff(): StateDiffEntry[] {
    const dungeonNumber = Number(readStateSlot('dungeon_number') ?? 0);
    const entries: StateDiffEntry[] = [];
    if (dungeonNumber === 1) entries.push([3864, '行橙ﾃﾞｨｱﾎﾞﾛはホテルの外に出た']);
    if (dungeonNumber === 2) entries.push([3864, '行橙ﾃﾞｨｱﾎﾞﾛはレクイエムの大迷宮に入った']);
    if (dungeonNumber === 3) entries.push([3864, '行橙ﾃﾞｨｱﾎﾞﾛはさらなる試練に向かった']);
    if (dungeonNumber === 4) entries.push([3864, '行橙ﾃﾞｨｱﾎﾞﾛは一巡後の世界へ進んだ']);
    if (dungeonNumber === 5) entries.push([3864, '行橙ﾃﾞｨｱﾎﾞﾛは鉄獄に入った']);
    if (dungeonNumber === 6) entries.push([3864, '行橙ﾃﾞｨｱﾎﾞﾛは白蛇の祠に入った']);
    if (dungeonNumber === 7) entries.push([3864, '行橙ﾃﾞｨｱﾎﾞﾛは絶頂の世界に向かった']);
    if (dungeonNumber === 8) entries.push([3864, '行橙ﾃﾞｨｱﾎﾞﾛはオシリス神の祠に向かった']);
    if (dungeonNumber === 9) entries.push([3864, '行橙ﾃﾞｨｱﾎﾞﾛはホテル裏の洞窟に向かった']);
    entries.push(['dtw-tcp-put', [['state-slot-ref', 3864]], [['state-slot-ref', 1050]]]);
    entries.push(['dtw-tcp-put', '\n', [['state-slot-ref', 1050]]]);
    entries.push(['core-call', 'Func.func0966']);
    return entries;
}

function buildFunc0993StateDiff(): StateDiffEntry[] {
    const windowCount = Number(readStateSlot(624) ?? 0);
    const entries: StateDiffEntry[] = [];
    if (windowCount === 0) entries.push([3905, '０']);
    if (windowCount === 1) entries.push([3905, '１']);
    if (windowCount === 2) entries.push([3905, '２']);
    if (windowCount === 3) entries.push([3905, '３']);
    if (windowCount === 4) entries.push([3905, '４']);
    if (windowCount === 5) entries.push([3905, '５']);
    if (windowCount === 6) entries.push([3905, '６']);
    if (windowCount === 7) entries.push([3905, '７']);
    if (windowCount === 8) entries.push([3905, '８']);
    entries.push([3906, [['state-string-concat', 3905, 1, '窓数']]]);
    entries.push(['dtw-tcp-put', [['state-slot-ref', 3906]], [['state-slot-ref', 1050]]]);
    entries.push(['dtw-tcp-put', '\n', [['state-slot-ref', 1050]]]);
    return entries;
}

function buildFunc0987StateDiff(): StateDiffEntry[] {
    const dungeonId = Number(readStateSlot(3903) ?? 0);
    const entries: StateDiffEntry[] = [];
    if (dungeonId === 0) entries.push([3904, '地上']);
    if (dungeonId === 1) entries.push([3904, 'ホテル外 ']);
    if (dungeonId === 2) entries.push([3904, '大迷宮 ']);
    if (dungeonId === 3) entries.push([3904, '試練  ']);
    if (dungeonId === 4) entries.push([3904, '一巡後 ']);
    if (dungeonId === 5) entries.push([3904, '鉄獄 ']);
    if (dungeonId >= 6) entries.push([3904, '白蛇']);
    if (dungeonId >= 7) entries.push([3904, '絶頂']);
    if (dungeonId >= 8) entries.push([3904, '']);
    return entries;
}

function buildFunc0907StateDiff(): StateDiffEntry[] {
    const specialActionLabel = func0907SpecialActionLabel(Number(readStateSlot(3577) ?? 0));
    const entries: StateDiffEntry[] = [
        ['data0', 13],
        ['data1', 13],
        ['dtw-clear-objects', [['state-slot-ref', 'data0']], [['state-slot-ref', 'data1']]],
        [3575, ''],
        [3576, 0],
    ];
    if (specialActionLabel !== undefined) {
        entries.push([3576, 1], [3575, specialActionLabel]);
    }
    if (specialActionLabel !== undefined) {
        entries.push(
            ['dtw-object-size', 100],
            ['dtw-set-position', 564, Number(readStateSlot(3529) ?? 0) + 22],
            ['dtw-combo-box', [['state-slot-ref', 3574]], 100, specialActionLabel],
        );
    } else {
        entries.push(
            ['dtw-object-size', 1],
            ['dtw-set-position', 800, 800],
            ['dtw-button', 'ダミー', [['prop-ref', 'Func.func0909']]],
        );
    }
    return entries;
}

function func0907SpecialActionLabel(itemId: number): string | undefined {
    if (itemId === 79) {
        return 'ﾀﾞﾝｼﾞｮﾝと同じ\n必ず生まれる\n生まれない';
    }
    if ([94, 119, 69, 160, 27, 78].includes(itemId)) {
        return 'ﾀﾞﾝｼﾞｮﾝと同じ\n掴み優先';
    }
    if ([93, 7, 141, 56, 136, 48, 95, 15, 80, 21, 121, 155, 151, 126, 40, 41, 42].includes(itemId)) {
        return 'ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃';
    }
    if ([47, 67].includes(itemId)) {
        return 'ﾀﾞﾝｼﾞｮﾝと同じ\n必ず引き寄せ';
    }
    if (itemId === 157) {
        return 'ﾀﾞﾝｼﾞｮﾝと同じ\n必ず潜水攻撃';
    }
    if (itemId === 109) {
        return 'ﾀﾞﾝｼﾞｮﾝと同じ\n透明\n透明ではない';
    }
    return undefined;
}

function buildFunc0966StateDiff(): StateDiffEntry[] {
    const entries: StateDiffEntry[] = [
        ['core-call', 'Func.func426'],
        ['core-call', 'Func.func427'],
        ['core-call', 'Func.func428'],
        ['core-call', 'Func.func429'],
    ];

    if (Number(readStateSlot('sympathy_id') ?? 0) === 135) {
        if (Number(readStateSlot('bougyo_disc_id') ?? 0) === 122) {
            entries.push(['kougeki_disc_id', 101]);
        }
        if (Number(readStateSlot('bougyo_disc_id') ?? 0) === 101) {
            entries.push(['kougeki_disc_id', 122]);
        }
    }

    entries.push([3819, [['dtw-dim', 30]]]);
    entries.push(['index-set', [['state-slot-ref', 3819]], 0, [['state-slot-ref', 'shageki_disc_id']]]);
    entries.push(['index-set', [['state-slot-ref', 3819]], 1, [['state-slot-ref', 'current_level']]]);
    entries.push(['index-set', [['state-slot-ref', 3819]], 2, [['state-slot-ref', 352]]]);
    entries.push(['index-set', [['state-slot-ref', 3819]], 3, [['state-slot-ref', 211]]]);
    entries.push(['index-set', [['state-slot-ref', 3819]], 4, [['state-slot-ref', 566]]]);
    entries.push(['index-set', [['state-slot-ref', 3819]], 5, [['state-slot-ref', 565]]]);
    entries.push(['index-set', [['state-slot-ref', 3819]], 6, [['state-slot-ref', 567]]]);
    entries.push(['index-set', [['state-slot-ref', 3819]], 7, [['state-slot-ref', 350]]]);
    entries.push(['index-set', [['state-slot-ref', 3819]], 8, [['state-slot-ref', 'current_floor']]]);
    entries.push(['index-set', [['state-slot-ref', 3819]], 9, [['state-slot-ref', 'wallet']]]);
    entries.push(['index-set', [['state-slot-ref', 3819]], 10, [['state-slot-ref', 'dungeon_number']]]);
    entries.push(['index-set', [['state-slot-ref', 3819]], 11, [['state-slot-ref', 'kougeki_disc_id']]]);
    entries.push(['index-set', [['state-slot-ref', 3819]], 12, [['index-ref', [['index-ref', [['state-slot-ref', 233]], [['state-slot-ref', 553]]]], 4]]]);
    entries.push(['index-set', [['state-slot-ref', 3819]], 13, [['state-slot-ref', 580]]]);
    entries.push(['index-set', [['state-slot-ref', 3819]], 14, [['state-slot-ref', 'bougyo_disc_id']]]);
    entries.push(['index-set', [['state-slot-ref', 3819]], 15, [['index-ref', [['index-ref', [['state-slot-ref', 233]], [['state-slot-ref', 554]]]], 4]]]);
    entries.push(['index-set', [['state-slot-ref', 3819]], 16, [['state-slot-ref', 581]]]);
    entries.push(['index-set', [['state-slot-ref', 3819]], 17, [['state-slot-ref', 'nouryoku_disc_id']]]);
    entries.push(['index-set', [['state-slot-ref', 3819]], 18, [['index-ref', [['index-ref', [['state-slot-ref', 233]], [['state-slot-ref', 555]]]], 4]]]);
    entries.push(['index-set', [['state-slot-ref', 3819]], 19, [['index-ref', [['index-ref', [['state-slot-ref', 233]], [['state-slot-ref', 556]]]], 3]]]);
    entries.push([3869, 0]);
    entries.push([3870, '捨送']);

    for (let cnt1 = 0; cnt1 < 20; cnt1 += 1) {
        entries.push([3870, [['state-string-concat', 3870, 1, '', ',', [['index-ref', [['state-slot-ref', 3819]], [['state-slot-ref', 3869]]]]]]]);
        entries.push([3869, cnt1 + 1]);
    }

    entries.push([3870, [['state-string-concat', 3870, 1, '', ',', [['state-slot-ref', 1170]]]]]);
    entries.push(['dtw-tcp-put', [['state-slot-ref', 3870]], [['state-slot-ref', 1050]]]);
    entries.push(['dtw-tcp-put', '\n', [['state-slot-ref', 1050]]]);
    return entries;
}

function cloneGeneratedStateDiff(name: string): StateDiffEntry[] {
    const stateDiff = generatedMapStateDiffs[name];
    if (!stateDiff) {
        throw new Error(`Generated map state-diff function is not available: ${name}`);
    }
    return JSON.parse(JSON.stringify(stateDiff)) as StateDiffEntry[];
}

function cloneSimpleGeneratedStateDiff(name: string): StateDiffEntry[] {
    const stateDiff = generatedSimpleStateDiffs[name];
    if (!stateDiff) {
        throw new Error(`Generated simple state-diff function is not available: ${name}`);
    }
    return JSON.parse(JSON.stringify(stateDiff)) as StateDiffEntry[];
}

function cloneApplyTimeGeneratedStateDiff(name: string): StateDiffEntry[] {
    const stateDiff = generatedApplyTimeStateDiffs[name];
    if (!stateDiff) {
        throw new Error(`Generated apply-time state-diff function is not available: ${name}`);
    }
    return JSON.parse(JSON.stringify(stateDiff)) as StateDiffEntry[];
}

function buildGeneratedSelectionStateDiff(name: string): StateDiffEntry[] {
    const spec = generatedSelectionStateDiffs[name];
    if (!spec) {
        throw new Error(`Generated selection state-diff function is not available: ${name}`);
    }
    const selector = Number(readStateSlot(spec.selectorSlot) ?? 0);
    const entries: StateDiffEntry[] = JSON.parse(JSON.stringify(spec.initial));
    let counter = 0;
    const runSteps = (steps: NonNullable<typeof spec.steps>): void => {
        for (const step of steps) {
            if (step.kind === 'case') {
                counter += 1;
                entries.push([spec.counterSlot, counter]);
                if (selector === counter) {
                    entries.push(...JSON.parse(JSON.stringify(step.writes)));
                }
                continue;
            }
            if (Number(readStateSlot(step.slot) ?? 0) === Number(step.equals)) {
                runSteps(step.steps);
            }
        }
    };
    if (spec.steps) {
        runSteps(spec.steps);
    } else {
        for (const item of spec.cases ?? []) {
            entries.push([spec.counterSlot, item.index]);
            if (selector === item.index) {
                entries.push(...JSON.parse(JSON.stringify(item.writes)));
            }
        }
    }
    if (spec.final) {
        entries.push(...JSON.parse(JSON.stringify(spec.final)));
    }
    return entries;
}

export function hasGeneratedGameFunction(name: string): name is GeneratedGameFunctionName {
    return hasGeneratedGameFunctionMetadata(name) &&
        Object.prototype.hasOwnProperty.call(generatedStateDiffFunctions, name);
}

export function shouldUseGeneratedGameFunction(name: string): boolean {
    return hasGeneratedGameFunction(name) && (
        flagEnabled(readFlag(name)) ||
        generatedGameFunctionGroups(name).some((group) => flagEnabled(readFlag(group))) ||
        flagEnabled(readFlag('all'))
    );
}

export async function runGeneratedGameFunction(
    name: string,
    call: GeneratedGameFunctionCall = {},
): Promise<unknown[]> {
    const buildStateDiff = generatedStateDiffFunctions[name as GeneratedGameFunctionName];
    if (!buildStateDiff) {
        throw new Error(`Generated state-diff function is not registered: ${name}`);
    }
    const stateDiff = buildStateDiff(call);
    const hostGlobals = (globalThis as any).__NELISP_STATE_DIFF_HOST_GLOBALS__ ?? {};
    const outputs = await runStateDiffResult(stateDiff, {
        globals: {
            ...hostGlobals,
            args: call.args ?? [],
            this: call.thisArg,
        },
    });
    recordGeneratedGameFunctionRun(name, outputs);
    (globalThis as any).__NELISP_STATE_DIFF_TRACE__?.({ name, stateDiff, outputs });
    return outputs;
}

export function getGeneratedGameFunctionStats(): GeneratedGameFunctionStats {
    const stats = readStats();
    return {
        total: stats.total,
        byName: { ...stats.byName },
        lastName: stats.lastName,
        lastAt: stats.lastAt,
        lastOutputCount: stats.lastOutputCount,
    };
}

export function resetGeneratedGameFunctionStats(): GeneratedGameFunctionStats {
    const stats: GeneratedGameFunctionStats = { total: 0, byName: {} };
    (globalThis as any)[STATS_KEY] = stats;
    return getGeneratedGameFunctionStats();
}

function recordGeneratedGameFunctionRun(name: string, outputs: unknown[]): void {
    const stats = readStats();
    stats.total += 1;
    stats.byName[name] = (stats.byName[name] ?? 0) + 1;
    stats.lastName = name;
    stats.lastAt = new Date().toISOString();
    stats.lastOutputCount = outputs.length;
}

function readStats(): GeneratedGameFunctionStats {
    const existing = (globalThis as any)[STATS_KEY];
    if (existing && typeof existing === 'object') {
        existing.total = Number(existing.total ?? 0);
        existing.byName = existing.byName ?? {};
        return existing;
    }
    return resetGeneratedGameFunctionStats();
}

function readFlag(name: string): FlagValue {
    const globalFlags = (globalThis as any).__NELISP_STATE_DIFF_FLAGS__;
    if (globalFlags && Object.prototype.hasOwnProperty.call(globalFlags, name)) {
        return globalFlags[name];
    }

    try {
        const storageValue = globalThis.localStorage?.getItem(`nelisp.stateDiff.${name}`);
        if (storageValue != null) return storageValue;
    } catch (_error) {
        // localStorage is optional in tests and non-browser hosts.
    }

    const envName = `NELISP_STATE_DIFF_${name.replace(/[^a-z0-9]/gi, '_').toUpperCase()}`;
    return typeof process !== 'undefined' ? process.env?.[envName] : undefined;
}


function flagEnabled(value: FlagValue): boolean {
    if (value === true || value === 1) return true;
    if (typeof value !== 'string') return false;
    return ['1', 'true', 'yes', 'on'].includes(value.toLowerCase());
}
