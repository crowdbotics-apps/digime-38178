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
      <View style={styles.View_7_30}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f55f82c-e07e-4022-8e7a-dd873de718ad"
          }}
          style={styles.ImageBackground_7_31}
        />
        <View style={styles.View_25_2} />
        <View style={styles.View_25_3}>
          <Text style={styles.Text_25_3}>Sign Up</Text>
        </View>
        <View style={styles.View_25_4} />
        <View style={styles.View_34_27} />
        <View style={styles.View_34_28} />
        <View style={styles.View_34_29} />
        <View style={styles.View_34_30} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/721d40a5-13e3-4d33-9c19-718e37626bef"
          }}
          style={styles.ImageBackground_34_25}
        />
      </View>
      <View style={styles.View_25_11}>
        <Text style={styles.Text_25_11}>Username</Text>
      </View>
      <View style={styles.View_25_12}>
        <Text style={styles.Text_25_12}>Email</Text>
      </View>
      <View style={styles.View_25_14}>
        <Text style={styles.Text_25_14}>Password</Text>
      </View>
      <View style={styles.View_25_16}>
        <Text style={styles.Text_25_16}>Confirm Password</Text>
      </View>
      <View style={styles.View_28_18}>
        <Text style={styles.Text_28_18}>Phone Number</Text>
      </View>
      <View style={styles.View_42_70}>
        <Text style={styles.Text_42_70}>By proceeding, you agree to these</Text>
      </View>
      <View style={styles.View_42_71}>
        <Text style={styles.Text_42_71}>Terms and Conditions</Text>
      </View>
      <View style={styles.View_34_23}>
        <Text style={styles.Text_34_23}>+233</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_33_21}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("29_20"))
        }
      />
      <View style={styles.View_33_22}>
        <Text style={styles.Text_33_22}>Sign Up</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_7_30: {
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
  ImageBackground_7_31: {
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
  View_25_2: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 238, 238, 1)"
  },
  View_25_3: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_25_3: {
    color: "rgba(88, 89, 100, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_4: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(147, 149, 164, 1)",
    borderWidth: 1
  },
  View_34_27: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("36%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(147, 149, 164, 1)",
    borderWidth: 1
  },
  View_34_28: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("50%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(147, 149, 164, 1)",
    borderWidth: 1
  },
  View_34_29: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("64%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(147, 149, 164, 1)",
    borderWidth: 1
  },
  View_34_30: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("79%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(147, 149, 164, 1)",
    borderWidth: 1
  },
  ImageBackground_34_25: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_25_11: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_25_11: {
    color: "rgba(147, 149, 164, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_12: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_25_12: {
    color: "rgba(147, 149, 164, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_14: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_25_14: {
    color: "rgba(147, 149, 164, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_16: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("60%"),
    justifyContent: "flex-start"
  },
  Text_25_16: {
    color: "rgba(147, 149, 164, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_18: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_28_18: {
    color: "rgba(147, 149, 164, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_42_70: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("120%"),
    justifyContent: "flex-start"
  },
  Text_42_70: {
    color: "rgba(147, 149, 164, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_42_71: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("120%"),
    justifyContent: "flex-start"
  },
  Text_42_71: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_34_23: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("80%"),
    justifyContent: "flex-start"
  },
  Text_34_23: {
    color: "rgba(147, 149, 164, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_33_21: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("92%"),
    backgroundColor: "rgba(255, 184, 0, 1)"
  },
  View_33_22: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("94%"),
    justifyContent: "flex-start"
  },
  Text_33_22: {
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
