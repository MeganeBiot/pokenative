import { Image, TextInput, StyleSheet, View } from "react-native";
import { Row } from "./Row";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Colors } from "@/constants/Colors";
import { BottomTabBarHeightCallbackContext } from "@react-navigation/bottom-tabs";

type Props = {
    value: string; 
    onChange: (s: string) => void;
}

export function SearchBar ({value, onChange}: Props) {
    const colors = useThemeColors ();
    return (
        <Row gap={8} style={[styles.wrapper, { backgroundColor: colors.grayWhite }]}
        >
        <Image 
            source={require('../assets/images/search.png')} 
            width= {16} 
            height={16}/>
        <TextInput style={styles.input} onChangeText={onChange} value={value}/>
    </Row>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        borderRadius: 16,
        height: 32,
        paddingHorizontal: 12,
    },
    input: {
        flex: 1,
        height: 32,
        fontSize: 16,
        lineHeight: 16,
    }
})