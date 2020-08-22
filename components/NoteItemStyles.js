import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({

    noteItemContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgb(255, 250, 230)',
        marginVertical: 3,
        alignItems: 'center',
        borderRadius: 3,
        paddingRight: 3,
        paddingLeft: 3,
        paddingTop: 3,
        paddingBottom: 3,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(255, 251, 190)'
    },

    noteIcon: {
        height: 40,
        width: 40,
        borderRadius: 7
    },

    noteTitle: {
        flex: 1,
        fontSize: 20,
        padding: 10,
        flexGrow: 3,
        color: 'grey'
    }
})

export default Styles;