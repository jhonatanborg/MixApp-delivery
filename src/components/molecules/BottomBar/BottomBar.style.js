import { StyleSheet } from 'react-native';
import { Typography, Colors } from '../../../styles';

const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    height: 100,
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 8,
    zIndex: 10,
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    color: Colors.WHITE,
    backgroundColor: Colors.THEMECOLOR,
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: 16,
    textAlign: 'center',
    color: Colors.WHITE,
  },
  bottomBarActions: {
    paddingVertical: 2,
    flex: 2,
    marginRight: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
  },
  quantity: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: 16,
    textAlign: 'center',
    color: Colors.PRIMARY,
  },
  buttomAction: {
    padding: 10,
  },
});
export default styles;
