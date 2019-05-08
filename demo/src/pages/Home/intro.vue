<template>
	<div class="home-plate intro">
		<div class="container">
			<div class="intro-top wow fadeInUp">
				<div class="intro-logo">
					<img src="../../assets/images/logo-qiuxue.png" />
				</div>
				<div class="intro-title">汇集优质教育资源的新型教育平台</div>
				<div class="intro-topic">87%的好老师了解裘学后都决定留下来创业 裘学欢迎优秀的创业老师和团队入驻</div>
				<div class="intro-group">
		          <router-link to="/apply" class="app">申请入驻<i class="icon qui-jiantou"></i></router-link>
		          <a class="cont" @click="handleShowContact">联系我们</a>
		        </div>
			</div>
		</div>
		<div class="intro-bottom">裘学是一个汇集优质教育资源的新型教育平台。我们通过多年行业经验，挑选最好的老师及教研体系，提供全面丰富的课程，更好的为家长和学员服务，让学生在裘学轻松地找到各个科目最棒的老师。裘学理念：为好老师赋能，我们提供一系列的配套设施，为优质老师提升效率。老师们只需专心教学，即可极大地降低创业风险，同时实现了资源利用的最大化。</div>
		<el-dialog title="联系我们" :visible.sync="dialogVisible" width="400px" custom-class="contact-modal" top="33vh">
			<div class="contact-body">
				<div class="modal-item">
					<div class="avatar">
						<img src="../../assets/images/tang.png" width="50" />
					</div>
					<div class="name">唐老师</div>
					<div class="phone">1867670701</div>
					<div class="ewm">
						<img src="../../assets/images/t-tang.png" />
					</div>
				</div>
				<div class="modal-item">
					<div class="avatar">
						<img src="../../assets/images/wang.png" width="50" />
					</div>
					<div class="name">王老师</div>
					<div class="phone">13530610304</div>
					<div class="ewm">
						<img src="../../assets/images/t-wang.png" />
					</div>
				</div>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	import { Dialog } from 'element-ui';
	import 'element-ui/lib/theme-chalk/index.css';

	export default {
		name: "intro",
		components: {
			'elDialog': Dialog
		},
		data() {
			return {
				dialogVisible: false
			}
		},
		methods: {
			handleShowContact() {
				this.dialogVisible = true;
			}
		}
	}
</script>

<style scoped lang="scss">
	.intro {
		background-image: url("../../assets/images/home_bg.png");
		background-repeat: no-repeat;
		background-size: cover;
        background-position: 50% center;
		position: relative;
		.container {
			padding: 0 40px;
			position: relative;
		}
		.intro-top {
			padding-top: 130px;
			width: 565px;
			color: #000033;
			font-family: "microsoft yahei";
			margin: 0 auto;
			text-align: center;
		}
		.intro-logo {
			margin-top: 50px;
			img {
				width: 250px;;
			}
		}
		.intro-title {
			font-size: 36px;
			margin-top: 65px;
			margin-bottom: 30px;
		}
		.intro-topic {
			width: 407px;
			margin: 0 auto;
			text-align: center;
			font-size: 20px;
		}
		.intro-group {
			padding-top: 78px;
			padding-bottom: 135px;
			font-size: 0;
			a {
				display: inline-block;
				width: 140px;
				height: 46px;
				border-radius: 23px;
				font-size: 18px;
				text-align: center;
				line-height: 46px;
				border: 1px solid #642B8D;
				transition: all ease-out .3s;
				margin-right: 20px;
				cursor: pointer;
				&:hover {
					i {
						text-indent: 36px;
					}
					&.app {
						text-indent: 0px;
						i {
							color: #fff;
						}
					}
				}
				&.app {
					color: #FFFFFF;
					background: #642B8D;
					text-indent: 20px;
					i {
						text-indent: -20px;
						transition: all ease-out .3s;
						font-size: 14px;
						color: rgba(255, 255, 255, 0);
						vertical-align: middle;
						margin-left: 5px;
					}
				}
				&.cont {
					color: #642B8D;
					background: #FFFFFF;
				}
			}
		}
		.intro-bottom {
			width: 1200px;
			padding-bottom: 210px;
			margin: 0 auto;
			text-align: center;
			font-size: 14px;
			font-family: "microsoft yahei";
			color: #000033;
		}
	}
	
	@media (min-width: 1921px) {
		.intro {
			background-image: url("../../assets/images/home_bg.png");
			&:before,
			&:after {
				content: '';
				position: absolute;
				z-index: 1;
			}
			/*&:before {
				left: 0;
				bottom: 0;
				background: url("../../assets/images/bg-cor-p1.png") no-repeat;
				width: 262px;
				height: 219px;
				background-size: cover;
			}
			&:after {
				right: 0;
				top: 40px;
				background: url("../../assets/images/bg-cor-g1.png") no-repeat;
				width: 183px;
				height: 341px;
				background-size: cover;
			}*/
		}
	}
	
	.contact-mask {
		position: fixed;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.8);
		z-index: 1000;
		/*opacity: .5;*/
	}
	
	.contact-body {
		padding: 0 15px;
		display: flex;
	}
	
	.modal-item {
		width: 50%;
		color: #333;
		text-align: center;
		font-size: 16px;
		.name {}
		.avatar {
			margin-bottom: 10px;
			img {
				width: 50px;
				height: 50px;
				vertical-align: middle;
				border-radius: 50%;
			}
		}
		.ewm {
			margin-top: 15px;
			img {
				width: 70px;
				height: 70px;
				vertical-align: middle;
			}
		}
	}
</style>

<style lang="scss">
	.v-modal {
		opacity: .1 !important;
	}
	
	.el-dialog {
		&.contact-modal {
			border-radius: 10px;
			box-shadow: 0 20px 40px rgba(0, 0, 0, .2);
			.el-dialog__header {
				text-align: center;
			}
			.el-dialog__title {
				font-size: 20px;
				font-weight: bold;
				color: #333
			}
			.el-dialog__headerbtn .el-dialog__close {
				color: #111;
				font-size: 24px;
			}
		}
	}
</style>