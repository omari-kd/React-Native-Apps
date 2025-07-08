import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const Verification = () => {
  return (
    <View
      style={{
        padding: wp(5),
        flex: 1
      }}
    >
      <StatusBar style="auto" />
      <View
        style={{
          marginTop: wp(20)
        }}
      >
        {/* Verification Header and SubText */}
        <View style={{ gap: wp(2) }}>
          <View>
            <Text style={{ fontSize: wp(6), fontWeight: "500" }}>
              Verification
            </Text>
          </View>

          <View>
            <Text>
              We've sent you the verification {"\n"}code on +1234567890
            </Text>
          </View>
        </View>

        {/* Verification code boxed */}

        <View
          style={{ marginTop: wp(15), gap: wp(10) }}
          className="flex flex-row justify-center"
        >
          <View>
            <TextInput
              style={{
                width: wp(13),
                height: wp(13),
                borderWidth: wp(0.2),
                borderRadius: wp(2)
              }}
              keyboardType="numeric"
              placeholder=""
            />
          </View>
          <View>
            <TextInput
              style={{
                width: wp(13),
                height: wp(13),
                borderWidth: wp(0.2),
                borderRadius: wp(2)
              }}
              keyboardType="numeric"
              placeholder=""
            />
          </View>
          <View>
            <TextInput
              style={{
                width: wp(13),
                height: wp(13),
                borderWidth: wp(0.2),
                borderRadius: wp(2)
              }}
              keyboardType="numeric"
              placeholder=""
            />
          </View>
          <View>
            <TextInput
              style={{
                width: wp(13),
                height: wp(13),
                borderWidth: wp(0.2),
                borderRadius: wp(2)
              }}
              keyboardType="numeric"
              placeholder=""
            />
          </View>
        </View>

        {/* confirmation button */}
        <TouchableOpacity
          style={{
            marginTop: wp(15),
            alignItems: "center"
          }}
        >
          <View
            style={{
              width: wp(60),
              height: wp(12)
            }}
            className="bg-[#4F86F7] justify-center items-center rounded-2xl"
          >
            <Text className="text-white text-lg p-2">Continue</Text>
          </View>
        </TouchableOpacity>

        {/* Resend Code */}
        <View style={{ marginTop: wp(10) }} className="items-center">
          <Text>Re-send Code in 0:20</Text>
        </View>
      </View>
    </View>
  );
};

export default Verification;
