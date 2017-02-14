import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserDetailPage } from '../user-detail/user-detail';
import { UserService } from '../../services/user';

@Component({
	selector:'cy-friend-add-page',
	templateUrl: 'friend-add.html'
})
export class FriendAddPage {

	search : string;

	constructor(
		public navCtrl :NavController,
		public userService: UserService,
	) {}

	submitForm(){
		this.userService.searchUser(this.search).subscribe(
			res => {
				
				if(res.data && res.data.length == 0){
		      		alert('没有找到该用户！');
		      		return;
		    	}

				this.gotoUserDetailPage( res.data[0]._id );
			}
		);
	}

	gotoUserDetailPage(userId){
	   this.navCtrl.push(UserDetailPage,{userId: userId });
	}

}
