var fileObjects = [];

Template.newMeeting.events({

    'click .ion-android-camera': function (evevt, template) {
        MeteorCamera.getPicture({width: 1024, height: 768, quality: 100}, function (e, r) {
            if (e) {
                console.log(e);
            } else {
                var newFile = new FS.File();
                newFile.attachData(r, {type: 'image/jpeg'});
                $("#previewImageList").append("<img src='" + r + "' class=\"padding preview-image\"></img>");
                fileObjects.push(newFile);
            }
        });
    },
    'change .fileInput': function (evevt, template) {
         FS.Utility.eachFile(event, function (file) {
            var newFile = new FS.File(file);
            fileObjects.push(newFile);
            var reader = new FileReader();
            reader.onload = function (e) {
                $("#previewImageList").append("<img src='" + this.result + "' class=\"padding preview-image\"></img>");
            }
            reader.readAsDataURL(file);
        });
    },
    'submit form': function (event, template) {
        event.preventDefault();
         var meetingName = template.$('[name=meetingName]').val();
         var tagline = template.$('[name=tagline]').val();
         var meetingContent = template.$('[name=meetingContent]').val();
         var meetingTime = template.$('[name=meetingTime]').val();
        var fileIds = [];
        //IonLoading.show({customTemplate: '<h3>Loading…</h3><p>正在上传照片，请稍候....</p>'});
        _.each(fileObjects, function (fo) {
            var fileObj = Uploads.insert(fo);
            if (fileObj) {
                fileIds.push(fileObj._id);
            }
        });
        MeetingList.insert({
        	userId:Meteor.userId(),
            meetingName: meetingName,
            tagline: tagline,
            meetingContent: meetingContent,
            meetingTime: meetingTime,
            fileIds: fileIds,
            createdAt:new Date()
        });
        //IonLoading.hide();
        IonModal.close();
        IonPopup.alert({
            title: '提示',
            template: '创建会议成功！',
            okText: '关闭'
        });
        Router.go("/meetingList");
    }
});
