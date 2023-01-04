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
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2570d87-2ce9-4fb6-9cf2-726c8a52c189"
        }}
        style={styles.ImageBackground_7_27}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_7_32}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_2"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_7_36}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("29_19"))
        }
      />
      <View style={styles.View_7_33} />
      <View style={styles.View_22_7}>
        <View style={styles.View_22_8}>
          <View style={styles.View_22_9} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13809993-f441-4159-912e-9eda939792ea"
            }}
            style={styles.ImageBackground_22_10}
          />
        </View>
      </View>
      <View style={styles.View_7_34} />
      <View style={styles.View_22_11}>
        <View style={styles.View_22_12}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5a19938-0d6b-446a-bfd3-e207c1b85656"
            }}
            style={styles.ImageBackground_22_13}
          />
          <View style={styles.View_22_14}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b43b88f0-2689-4ccb-bb8f-15ad4b46e13d"
              }}
              style={styles.ImageBackground_22_15}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e000007-5a36-4572-a01b-9eadb5bf8744"
              }}
              style={styles.ImageBackground_22_16}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_18_2}>
        <Text style={styles.Text_18_2}>Email</Text>
      </View>
      <View style={styles.View_18_4}>
        <Text style={styles.Text_18_4}>Login</Text>
      </View>
      <View style={styles.View_18_3}>
        <Text style={styles.Text_18_3}>Password</Text>
      </View>
      <View style={styles.View_22_21}>
        <Text style={styles.Text_22_21}>Dont have an account?</Text>
      </View>
      <View style={styles.View_22_22}>
        <Text style={styles.Text_22_22}>Sign Up</Text>
      </View>
      <View style={styles.View_22_5}>
        <Text style={styles.Text_22_5}>Login</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  ImageBackground_7_27: {
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
  TouchableOpacity_7_32: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("108%"),
    minHeight: hp("108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(238, 238, 238, 1)"
  },
  TouchableOpacity_7_36: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("65%"),
    backgroundColor: "rgba(255, 184, 0, 1)"
  },
  View_7_33: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("36%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_22_7: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("37%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_22_8: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_22_9: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(39, 59, 74, 1)"
  },
  ImageBackground_22_10: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_7_34: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("45%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_22_11: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("45%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_22_12: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_22_13: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_22_14: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_22_15: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_22_16: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_18_2: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("38%"),
    justifyContent: "flex-start"
  },
  Text_18_2: {
    color: "rgba(147, 149, 164, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_4: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_18_4: {
    color: "rgba(88, 89, 100, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_3: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_18_3: {
    color: "rgba(147, 149, 164, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_21: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("53%"),
    justifyContent: "flex-start"
  },
  Text_22_21: {
    color: "rgba(147, 149, 164, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_22: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("53%"),
    justifyContent: "flex-start"
  },
  Text_22_22: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_5: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("67%"),
    justifyContent: "flex-start"
  },
  Text_22_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
