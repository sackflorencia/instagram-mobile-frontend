import { StyleSheet, Text, View } from "react-native";

const StatItem = ({ label, value }: { label: string; value: number }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.value}>{value}</Text>
            <Text style={styles.label}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    value: {
        fontSize: 16,
        fontWeight: '600',
        color: '#262626',
    },
    label: {
        fontSize: 13,
        color: '#262626',
        marginTop: 2,
    },
});

export default StatItem;