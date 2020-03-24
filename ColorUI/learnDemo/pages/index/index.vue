<template>
	<view>
		<basics v-if="PageCur=='basics'"></basics>
		<components v-if="PageCur=='component'"></components>
		<plugin v-if="PageCur=='plugin'"></plugin>
		<test v-if="PageCur=='test'"></test>
		<mytest v-if="PageCur=='mytest'"></mytest>
		
		<view class="cu-bar tabbar bg-black shadow foot">
			<!--test-->
			<view class="action" @click="NavChange" data-cur="mytest">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/mytest' + [PageCur=='mytest'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='mytest'?'text-green':'text-gray'">首页</view>
			</view>
			<view class="action" @click="NavChange" data-cur="test">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/test' + [PageCur=='test'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='test'?'text-green':'text-gray'">测试</view>
			</view>
			<view class="action text-gray add-action">
				<button class="cu-btn cuIcon-add bg-green shadow" @click="add"></button>
				发布
			</view>
			
			
			<!--system-->
			<view class="action" @click="NavChange" data-cur="basics">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/basics' + [PageCur=='basics'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='basics'?'text-green':'text-gray'">元素</view>
			</view>
			<view class="action" @click="NavChange" data-cur="component">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/component' + [PageCur == 'component'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='component'?'text-green':'text-gray'">组件</view>
			</view>
			<view class="action" @click="NavChange" data-cur="plugin">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/plugin' + [PageCur == 'plugin'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='plugin'?'text-green':'text-gray'">扩展</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'mytest'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			},
			add: function(e) {
				uni.navigateTo({
					url:'/pages/test/add'
				});
			}
		}
	}
</script>

<style>

</style>
