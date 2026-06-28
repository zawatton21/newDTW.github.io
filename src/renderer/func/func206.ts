/**
 * func206 — 画面サイズ設定: 入力処理 (旧API互換)
 *
 * ※ MenuController.run() に置き換え。
 */
import * as Menu from '../menu/MenuController'
import * as Configs from '../menu/menuConfigs'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

async function func206(this: any) {
    if (shouldUseGeneratedGameFunction('func206')) {
        await runGeneratedGameFunction('func206', { thisArg: this });
        return;
    }

    await Menu.run(Configs.screenSize);
}

export { func206 }
