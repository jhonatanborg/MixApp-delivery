import { StyleSheet } from 'react-native';
import { Typography, Colors, Spacing } from '../../../styles';

const styles = StyleSheet.create({
  sectionInput: {
    borderWidth: 0,
    backgroundColor: Colors.GRAY_LIGHT,
    borderRadius: 8,
    paddingHorizontal: 15,
    color: Colors.GRAY_DARK,
    width: '100%',
    paddingVertical: 10,
    marginVertical: 10,
  },
  input: {
    borderWidth: 0,
    borderRadius: 12,
    height: 30,
    width: '100%',
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_12,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    color: Colors.GRAY_DARK,
  },
  text: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_12,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  error: {
    backgroundColor: Colors.ALERT,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
export default styles;
