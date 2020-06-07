import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    noteItemContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgb(255, 251, 239)',
        marginVertical: 3,
        alignItems: 'center',
        borderRadius: 3,
        paddingRight: 3
    },

    noteTitle: {
        fontSize: 20,
        padding: 10,
        flexGrow: 3
    }
})

export default styles;