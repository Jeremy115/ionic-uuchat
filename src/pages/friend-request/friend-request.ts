import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/user';
import { SystemService } from '../../services/system';

@Component({
	selector: 'cy-friend-request-page',
	templateUrl: 'friend-request.html'
})
export class FriendRequestPage {
	userId: string;
	requestMsg: string;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public userService: UserService,
		public systemService: SystemService
	) {

		this.userId = navParams.data.userId;


	}

	markFriend(): void {
		this.userService.makeFriend(this.userId, this.requestMsg).subscribe(

			res => {
				this.systemService.showToast('申请成功！');

				setTimeout(() => {
					this.navCtrl.pop();
				}, 1000)

			},
			err => this.systemService.handleError(err, '申请失败')
		);
	}

}
