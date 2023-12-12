import * as Adap from '../adapter/index'


function gcopy(org_buffer_id: any, x: number, y: number, img_width: number, img_height: number)  {
    Adap.gzoom(img_width, img_height, org_buffer_id, x, y, img_width, img_height, null);
}

export {gcopy}