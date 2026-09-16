import { StyleSheet } from 'react-native';

const PRIMARY = '#5B5FEF';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 32,
    },
    logo: {
        width: 150,
        height: 200,
        alignSelf: 'center',
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#111827',
        marginTop: 20,
        marginBottom: 16,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        paddingHorizontal: 16,
        height: 56,
        marginBottom: 16,
    },
    inputIcon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 15,
        color: '#111827',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    rememberRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rememberText: {
        marginLeft: 8,
        fontSize: 14,
        color: '#374151',
    },
    forgotText: {
        fontSize: 14,
        color: '#6B7280',
    },
    signInButton: {
        backgroundColor: PRIMARY,
        borderRadius: 12,
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signInText: {
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
    orText: {
        textAlign: 'center',
        color: '#9CA3AF',
        fontSize: 13,
        marginVertical: 20,
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        height: 52,
        marginBottom: 12,
    },
    socialText: {
        marginLeft: 10,
        fontSize: 15,
        color: '#111827',
        fontWeight: '500',
    },
    signupRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 12,
    },
    signupText: {
        color: '#374151',
        fontSize: 14,
    },
    signupLink: {
        color: PRIMARY,
        fontSize: 14,
        fontWeight: 'bold',
    },
});