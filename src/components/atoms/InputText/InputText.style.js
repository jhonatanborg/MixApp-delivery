import { StyleSheet } from 'react-native';
import { Typography, Colors, Spacing } from '../../../styles';

const styles = StyleSheet.create({
  sectionInput: {
    borderWidth: 0,
    backgroundColor: Colors.GRAY_LIGHT,
    borderRadius: 8,
    paddingHorizontal: 15,
    color: Colors.GRAY_DARK,
  },
  input: {
    borderWidth: 0,
    borderRadius: 12,
    height: 60,
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  icon: {
    color: Colors.GRAY_DARK,
  },
});
export default styles;
