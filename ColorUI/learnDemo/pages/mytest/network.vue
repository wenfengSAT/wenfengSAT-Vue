<template>
	<view>
		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
			<cu-custom bgImage="https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">网络请求</block>
			</cu-custom>
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange "></text> GET请求
				</view>
			</view>
			<view class="cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']">
				<view class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<gridCol*2">
					<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]" :name="[item.name]" @click="getRequest">
						<view class="cu-tag badge" v-if="item.badge!=0">
							<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
						</view>
					</view>
					<text>{{item.name}}</text>
				</view>
				<view class="cu-item" @click="getRequest">
					<view class="cuIcon-taxi text-olive">
					</view>
					<text>普通请求</text>
				</view>
			</view>
			
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange "></text> POST请求
				</view>
			</view>
			<view class="cu-list grid col-4 no-border">
				<view class="cu-item" @click="postRequest">
					<view class="cuIcon-taxi text-olive">
					</view>
					<text>普通请求</text>
				</view>
				<view class="cu-item">
					<view class="cuIcon-taxi text-olive">
					</view>
					<text>表单提交</text>
				</view>
				
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {post1,post,get,showModal} from '../../utils/index.js';
	export default {
		data() {
			return {
				cuIconList: [{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 0,
					name: '列表查询'
				}, {
					cuIcon: 'recordfill',
					color: 'orange',
					badge: 0,
					name: '带数查询'
				}],
				modalName: null,
				gridCol: 3,
				gridBorder: false,
			};
		},
		methods: {
			postRequest : function(e) {
				let params = {"body":{},"header":{}};
				let body = {"type":"0","userId":"202001151215059518"};
				var header = {"appKey":"1","version":"1.0"};
				params.body = body;
				params.header = header;
				console.log(params);
				post("/api2/goapi/sv/app/menu/menuList", params).then(res=>{
					if(res.status === 200){
						console.log(res.cityInfo);
						console.log(res.data);
					}else{
						console.log(res.message);
					}
				});
				post1("/api2/goapi/sv/app/menu/menuList", params).then(res=>{
					if(res.status === 200){
						console.log(res.cityInfo);
						console.log(res.data);
					}else{
						console.log(res.message);
					}
				});
			},
			getRequest : function(e) {
				get("/api/api/weather/city/101030100", null).then(res=>{
					if(res.status === 200){
						console.log(res.cityInfo);
						console.log(res.data);
					}else{
						console.log(res.message);
					}
				});
			}
		}
	}
</script>

<style>
	
</style>
