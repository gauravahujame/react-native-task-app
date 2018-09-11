// @flow
export function colorLuminance(hex, lum) {
    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;
  
    // convert to decimal and change luminosity
    let rgb = '#';
    let c;
    let i;
  
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i * 2, 2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += (`00${c}`).substr(c.length);
    }
  
    return rgb;
  }
  
  export function textColor(color: string, light: string = '#ffffff', dark: string = '#000000'): string {
    const darkColor = isDarkColor(color, light, dark);
    return darkColor ? dark : light;
  }
  
  export function colorDiff (color) {
    const hexcolor = (color) ? color.replace('#', '') : '';
    const r = parseInt(hexcolor.substr(0, 2), 16);
    const g = parseInt(hexcolor.substr(2, 2), 16);
    const b = parseInt(hexcolor.substr(4, 2), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return yiq;
  }
  
  export function isDarkColor (color: string, light: string = '#ffffff', dark: string = '#000000'): Boolean {
    const hexcolor = (color) ? color.replace('#', '') : '';
    const foreground = colorDiff(hexcolor);
    const darkBackground = (Math.abs(foreground - colorDiff(dark)));
    const lightBackground = (Math.abs(foreground - colorDiff(light)));
    return darkBackground > lightBackground;
  }
  
  export function hexToRgb (hexVal) {
    let hex = hexVal;
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hexVal.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    } : null;
  }