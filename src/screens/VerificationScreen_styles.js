import { StyleSheet } from 'react-native';

const PRIMARY = '#5B5FEF';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 24,
        paddingTop: 16,
    },
    backButton: {
        marginBottom: 16,
        width: 32,
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 8,
    },
    subheading: {
        fontSize: 14,
        color: '#6B7280',
        lineHeight: 20,
        marginBottom: 24,
    },
    codeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32,
    },
    codeBox: {
        width: 64,
        height: 64,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#111827',
    },
    codeBoxFilled: {
        borderColor: PRIMARY,
    },
    continueButton: {
        backgroundColor: PRIMARY,
        borderRadius: 12,
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    continueText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    arrowCircle: {
        position: 'absolute',
        right: 8,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    resendRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    resendText: {
        color: '#6B7280',
        fontSize: 14,
    },
    resendTime: {
        color: PRIMARY,
        fontSize: 14,
        fontWeight: 'bold',
    },
    resendLink: {
        color: PRIMARY,
        fontSize: 14,
        fontWeight: 'bold',
    },
});