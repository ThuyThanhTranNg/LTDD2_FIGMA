import { StyleSheet } from 'react-native';

const BLUE = '#5669FF';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-end',
    },
    imageWrapper: {
        flex: 2.7,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    bgImage: {
        width: '100%',
        height: '100%',
    },
    card: {
        flex: 1,
        backgroundColor: BLUE,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingHorizontal: 24,
        paddingTop: 40,
        paddingBottom: 16,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 32,
    },
    subtitle: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 16,
        lineHeight: 20,
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 32,
    },
    skipText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
    },
    nextText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    dotsContainer: {
        flexDirection: 'row',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(255,255,255,0.4)',
        marginHorizontal: 4,
    },
    dotActive: {
        backgroundColor: '#fff',
    },
});