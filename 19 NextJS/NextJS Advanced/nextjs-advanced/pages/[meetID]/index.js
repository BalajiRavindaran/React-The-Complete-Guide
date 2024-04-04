import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

const MeetupDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupDetail.title}</title>
        <meta
          name="description"
          content={props.meetupDetail.description}
        ></meta>
      </Head>
      <MeetupDetail
        image={props.meetupDetail.image}
        title={props.meetupDetail.title}
        address={props.meetupDetail.address}
        description={props.meetupDetail.description}
      />
    </Fragment>
  );
};

export default MeetupDetails;

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://balaji05ravindaran:698gaLpOLPAsUL3x@cluster.hpnylrx.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetupsId = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: meetupsId.map((meetupID) => ({
      params: { meetID: meetupID._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupID = context.params.meetID;

  const client = await MongoClient.connect(
    "mongodb+srv://balaji05ravindaran:698gaLpOLPAsUL3x@cluster.hpnylrx.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupID),
  });

  client.close();

  return {
    props: {
      meetupDetail: {
        image: selectedMeetup.image,
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}
