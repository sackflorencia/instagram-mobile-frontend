import { Text, View } from "react-native";

const StatItem = ({ label, value }: { label: string; value: number }) => {
    return (
        <View>
            <Text>{value}</Text>
            <Text>{label}</Text>
        </View>
    )
}
export default StatItem;