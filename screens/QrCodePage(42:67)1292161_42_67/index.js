import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_42_68}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/891269cc-0d7b-43b5-9fb9-6cdc6cbb6026"
          }}
          style={styles.ImageBackground_42_69}
        />
        <View style={styles.View_44_5} />
        <View style={styles.View_49_5} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/adcf32b1-4ba4-4678-a73c-b457fbecfbe1"
          }}
          style={styles.ImageBackground_49_6}
        />
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/817b8eb9-97bd-4869-b4b3-fa6b764350ef"
        }}
        style={styles.TouchableOpacity_49_7}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("29_19"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74aa33eb-d0a8-4f41-bf13-0781be00c0f6"
        }}
        style={styles.ImageBackground_58_24}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f94870f6-4509-4cbf-9db7-bc3025d04c1d"
        }}
        style={styles.ImageBackground_58_26}
      />
      <View style={styles.View_42_78}>
        <Text style={styles.Text_42_78}>My Digi Code</Text>
      </View>
      <View style={styles.View_58_5} />
      <View style={styles.View_64_39}>
        <Text style={styles.Text_64_39}>Share ID</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7029c6c8-a94c-4f43-ab5a-511e64c4fa87"
        }}
        style={styles.ImageBackground_58_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1844df1e-79dc-47ca-b2af-1942261b1fa7"
        }}
        style={styles.ImageBackground_64_43}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_42_68: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_42_69: {
    width: wp("214%"),
    minWidth: wp("214%"),
    height: hp("159%"),
    minHeight: hp("159%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-33%"),
    resizeMode: "cover"
  },
  View_44_5: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("27%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.5
  },
  View_49_5: {
    width: wp("58%"),
    minWidth: wp("58%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("31%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_49_6: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("33%"),
    resizeMode: "cover"
  },
  TouchableOpacity_49_7: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("6%")
  },
  ImageBackground_58_24: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("5%")
  },
  ImageBackground_58_26: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("7%")
  },
  View_42_78: {
    width: wp("61%"),
    minWidth: wp("61%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_42_78: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_58_5: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("82%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_64_39: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("84%"),
    justifyContent: "flex-start"
  },
  Text_64_39: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_58_10: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_64_43: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
