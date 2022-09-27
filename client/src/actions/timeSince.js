export function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);
  
    // var interval = seconds / 31536000;
  
    // if (interval > 1) {
    //   return Math.floor(interval) + " years";
    // }
    // interval = seconds / 2592000;
    // if (interval > 1) {
    //   return Math.floor(interval) + " months";
    // }
    // interval = seconds / 86400;
    // if (interval > 1) {
    //   return Math.floor(interval) + " days";
    // }
    var interval = seconds / 3600;
    if (interval > 1) {
      if(Math.floor(interval)<=24){
        return Math.floor(interval) + " hours ago";
      }
      return date.getDate()+" - "+(date.getMonth()+1)+" - "+date.getFullYear();
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }