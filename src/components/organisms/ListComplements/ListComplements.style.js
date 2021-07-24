import { StyleSheet } from 'react-native';
import { Typography, Colors } from '../../../styles';

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 8,
    backgroundColor: Colors.GRAY_LIGHT,
  },
  headerList: {
    backgroundColor: Colors.GRAY_LIGHT,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerItemTitle: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: 16,
    color: Colors.SECONDARY,
  },
  headerItemAction: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 50,
  },
  headerItemActionText: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: 16,
    color: '#7E7E7E',
  },
  listItem: {
    backgroundColor: Colors.WHITE,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  listItemActions: {
    paddingVertical: 2,
    marginRight: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
  },
  listItemText: {
    color: '#7E7E7E',
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: 16,
  },
  listItemSubtitle: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: 16,
    color: '#7E7E7E',
  },
  listItemActionButton: {
    borderRadius: 50,
    padding: 5,
  },
});
export default styles;
