import { scaleFont } from "./mixins";

// FONT FAMILY
export const FONT_FAMILY_REGULAR = "Jost_400Regular";
export const FONT_FAMILY_BOLD = "Jost_600SemiBold";

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = "400";
export const FONT_WEIGHT_BOLD = "700";

// FONT SIZE
export const FONT_SIZE_10 = scaleFont(10);
export const FONT_SIZE_12 = scaleFont(12);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_16 = scaleFont(20);
export const FONT_SIZE_22 = scaleFont(22);
export const FONT_SIZE_32 = scaleFont(32);
export const FONT_SIZE_40 = scaleFont(40);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
};
