import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView,KeyboardAvoidingView,Platform } from 'react-native'
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view'


export function KeyboardAvoiding ({children, style, animation }) {
    return (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
            {children}
        </KeyboardAwareScrollView>
    );
}

export function WithKeyboardAvoidingView  ({ children, footer,containerStyle })  {
    return (
        <KeyboardAvoidingView
            style={[{ flex: 1, },containerStyle]}
            behavior={Platform.OS === 'ios' ? 'padding' : null}
        >
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                {children}
            </ScrollView>
            {footer}
        </KeyboardAvoidingView>
    )
}