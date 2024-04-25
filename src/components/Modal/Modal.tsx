import React, { type FunctionComponent } from "react";
import {
    Modal as BaseModal,
    Platform,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from "react-native";
import { BlurView } from "expo-blur";
import { IModal } from "./types";

const Modal: FunctionComponent<IModal> = ({
    children,
    modalProps,
    conStyles,
    isVisible,
    makeBackgroundBlur,
    animationType,
    onBackgroundPress,
    blurIntensity = 10,
}) => {
    if (makeBackgroundBlur === undefined) {
        return (
            <BaseModal
                animationType={animationType ?? "slide"}
                hardwareAccelerated={isAndroid()}
                transparent={true}
                visible={isVisible}
                {...modalProps}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={onBackgroundPress}
                    style={[
                        {
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                        },
                        conStyles,
                    ]}
                >
                    <TouchableWithoutFeedback
                        onPress={(e) => {
                            e?.stopPropagation();
                        }}
                    >
                        {children}
                    </TouchableWithoutFeedback>
                </TouchableOpacity>
            </BaseModal>
        );
    }
    return (
        <BaseModal
            animationType={animationType ?? "slide"}
            hardwareAccelerated={isAndroid()}
            transparent={true}
            visible={isVisible}
            {...modalProps}
        >
            <TouchableOpacity
                activeOpacity={1}
                onPress={onBackgroundPress}
                style={{
                    flex: 1,
                }}
            >
                <BlurView
                    experimentalBlurMethod={
                        isAndroid() ? "dimezisBlurView" : "none"
                    }
                    intensity={blurIntensity}
                    tint="dark"
                    style={[
                        {
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                        },
                        conStyles,
                    ]}
                >
                    <TouchableWithoutFeedback
                        onPress={(e) => {
                            e?.stopPropagation();
                        }}
                    >
                        {children}
                    </TouchableWithoutFeedback>
                </BlurView>
            </TouchableOpacity>
        </BaseModal>
    );
};

const isAndroid = (): boolean => {
    return Platform.OS === "android";
};

export default Modal;
