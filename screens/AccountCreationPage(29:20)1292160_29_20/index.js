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
      <View style={styles.View_37_11}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7235223d-0cce-4120-9f36-6ac232ffe395"
          }}
          style={styles.ImageBackground_37_12}
        />
        <View style={styles.View_39_13}>
          <Text style={styles.Text_39_13}>Create Your ID</Text>
        </View>
        <View style={styles.View_39_14} />
        <View style={styles.View_85_27} />
        <View style={styles.View_85_28} />
        <View style={styles.View_85_29} />
        <View style={styles.View_85_31} />
        <View style={styles.View_85_32} />
        <View style={styles.View_39_25} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1eb592dc-f510-439f-a595-5163b75dcfb1"
          }}
          style={styles.ImageBackground_40_55}
        />
        <View style={styles.View_40_56} />
        <View style={styles.View_39_15}>
          <Text style={styles.Text_39_15}>First Name</Text>
        </View>
        <View style={styles.View_39_21}>
          <Text style={styles.Text_39_21}>Middle Name</Text>
        </View>
        <View style={styles.View_39_22}>
          <Text style={styles.Text_39_22}>Last Name</Text>
        </View>
        <View style={styles.View_41_59}>
          <Text style={styles.Text_41_59}>ID Type</Text>
        </View>
        <View style={styles.View_41_61}>
          <Text style={styles.Text_41_61}>ID Number</Text>
        </View>
        <View style={styles.View_41_62}>
          <Text style={styles.Text_41_62}>TIN</Text>
        </View>
        <View style={styles.View_39_23}>
          <Text style={styles.Text_39_23}>Date of Birth</Text>
        </View>
        <View style={styles.View_39_27}>
          <Text style={styles.Text_39_27}>Day</Text>
        </View>
        <View style={styles.View_39_28}>
          <Text style={styles.Text_39_28}>Month</Text>
        </View>
        <View style={styles.View_39_29}>
          <Text style={styles.Text_39_29}>Year</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc0e8f13-a6b3-4109-a483-93f5aa3d85ed"
        }}
        style={styles.ImageBackground_40_31}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb971822-f525-4bbe-856f-beab5c6ec9b3"
        }}
        style={styles.ImageBackground_40_33}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80e9a479-6675-43cc-b74b-50e122b6a549"
        }}
        style={styles.ImageBackground_40_35}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_42_65}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("29_19"))
        }
      />
      <View style={styles.View_42_66}>
        <Text style={styles.Text_42_66}>Create ID</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_37_11: {
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
  ImageBackground_37_12: {
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
  View_39_13: {
    width: wp("66%"),
    minWidth: wp("66%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_39_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_39_14: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("21%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(147, 149, 164, 1)",
    borderWidth: 1
  },
  View_85_27: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("32%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(147, 149, 164, 1)",
    borderWidth: 1
  },
  View_85_28: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("42%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(147, 149, 164, 1)",
    borderWidth: 1
  },
  View_85_29: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("71%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(147, 149, 164, 1)",
    borderWidth: 1
  },
  View_85_31: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("80%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(147, 149, 164, 1)",
    borderWidth: 1
  },
  View_85_32: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("90%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(147, 149, 164, 1)",
    borderWidth: 1
  },
  View_39_25: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("55%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_40_55: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("55%")
  },
  View_40_56: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("55%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_39_15: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_39_15: {
    color: "rgba(88, 89, 100, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_39_21: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_39_21: {
    color: "rgba(88, 89, 100, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_39_22: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("38%"),
    justifyContent: "flex-start"
  },
  Text_39_22: {
    color: "rgba(88, 89, 100, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_59: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("67%"),
    justifyContent: "flex-start"
  },
  Text_41_59: {
    color: "rgba(88, 89, 100, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_61: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("77%"),
    justifyContent: "flex-start"
  },
  Text_41_61: {
    color: "rgba(88, 89, 100, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_62: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("87%"),
    justifyContent: "flex-start"
  },
  Text_41_62: {
    color: "rgba(88, 89, 100, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_39_23: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("51%"),
    justifyContent: "flex-start"
  },
  Text_39_23: {
    color: "rgba(88, 89, 100, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_39_27: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_39_27: {
    color: "rgba(88, 89, 100, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_39_28: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_39_28: {
    color: "rgba(88, 89, 100, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_39_29: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_39_29: {
    color: "rgba(88, 89, 100, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_40_31: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_40_33: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_40_35: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  TouchableOpacity_42_65: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("106%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_42_66: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("108%"),
    justifyContent: "flex-start"
  },
  Text_42_66: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
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
