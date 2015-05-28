
MeetingList = new Mongo.Collection('meetingList');

//cfsFilerecord = new Mongo.Collection('cfs.uploads.filerecord');

MeetingList.before.insert(function (userId, doc) {
  doc.voterIds = [];
  doc.meetingVotes = 0;
  doc.createdAt = moment(this.createdAt).format('YYYY-MM-DD HH:mm:ss');
});

MeetingList.helpers({
  datePosted: function () {
    return this.createdAt;
  },
  author: function () {
    return Meteor.users.findOne({_id: this.userId});
  },
  voters: function () {
    return Meteor.users.find({_id: {$in: this.voterIds}});
  }
});

RegExp.escape = function(s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

MeetingList.search = function(query) {
  if (!query) {
    return;
  }
  return MeetingList.find({
    name: { $regex: RegExp.escape(query), $options: 'i' }
  }, {
    limit: 20
  });
};
/*
MeetingList.attachSchema(new SimpleSchema({
  meetingName: {
    type: String,
    autoform: {
      'label-type': 'placeholder',
      placeholder: '会议名称'
    },
    max: 200
  },
  meetingTime: {
    type: Date,
    autoform: {
      'label-type': 'placeholder',
      placeholder: '会议时间'
    },
    max: 200
  },
  tagline: {
    type: String,
    autoform: {
      'label-type': 'placeholder',
      placeholder: '简述'
    },
    max: 200
  },
  userId: {
    type: String,
    autoValue: function () {
      if (this.isSet) {
        return;
      }
      if (this.isInsert) {
        return Meteor.userId();
      } else {
        this.unset();
      }
    }
  },
  voterIds: {
    type: [String],
    optional: true,
    defaultValue: []
  },
  meetingVotes: {
    type: Number,
    optional: true,
    defaultValue: 0
  },
  createdAt: {
    type: Date
  }
}));
*/