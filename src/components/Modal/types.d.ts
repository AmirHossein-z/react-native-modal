export interface IModal {
    isVisible: boolean;
    children?: ReactNode;
    modalProps?: ModalProps;
    conStyles?: ViewStyle | FlexStyle;
    makeBackgroundBlur?: boolean;
    animationType?: "none" | "slide" | "fade";
    onBackgroundPress?: () => void;
    blurIntensity?: number;
}
