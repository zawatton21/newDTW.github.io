import { Gvar } from '../variable'

// @ts-expect-error TS(7006): Parameter 'font_type' implicitly has an 'any' type... Remove this comment to see the full error message
function font(font_type, font_size, font_style = null) {
    font_style = font_style || 0;
    const font_style_list = ["", "bold", "italic"];
    Gvar.context.font = font_style_list[font_style] + " " + font_size + "px '" + font_type + "'";
    Gvar.line_size = font_size;
}

export {font}