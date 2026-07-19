import type { BackgroundWallpaperConfig } from "@/types/backgroundWallpaper";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	mode: "banner",
	switchable: true,
	playerEnable: true,
	src: {
		desktop: [
			"assets/images/DesktopWallpaper/d1.jpg",
			"assets/images/DesktopWallpaper/d2.jpg",
			"assets/images/DesktopWallpaper/d3.jpg",
			"assets/images/DesktopWallpaper/d4.jpg",
			"assets/images/DesktopWallpaper/d5.jpg",
			"assets/images/DesktopWallpaper/d6.jpg",
		],
		mobile: [
			"assets/images/MobileWallpaper/m1.avif",
			"assets/images/MobileWallpaper/m2.avif",
			"assets/images/MobileWallpaper/m3.avif",
			"assets/images/MobileWallpaper/m4.avif",
			"assets/images/MobileWallpaper/m5.avif",
			"assets/images/MobileWallpaper/m6.avif",
		],
		playerUrl: [
			"/assets/videos/pv_compressed.mp4",
		],
	},
	common: {
		dimOpacity: 0.2,
		playerMode: "random",
		pageTitleSize: "5rem",
		postTitleSize: "5rem",
		postMetaSize: "1.25rem",
		postTitleMetaGap: "2rem",
		homeText: {
			enable: true,
			switchable: true,
			title: "Lovely Salt!",
			titleSize: "5rem",
			subtitle: [
				"繋いだ 願いが\n连接起来的愿望",
				"空へ放つ　飛び出す\n飞离大地 射向天空",
				"君と君と君を連れて\n带领着你们三人",
				"いちばんぼし見つけた\n找到了一等星",
				"きらきらきら\n一闪一闪",
				"ひとしずくの　ひかり\n一滴一滴的 光芒",
			],
			subtitleSize: "1.5rem",
			typewriter: {
				enable: true,
				speed: 100,
				deleteSpeed: 50,
				pauseTime: 2000,
			},
		},
		navbar: {
			transparentMode: "semifull",
			enableBlur: true,
			blur: 5,
		},
		waves: {
			enable: {
				desktop: true,
				mobile: true,
			},
			switchable: true,
		},
		gradient: {
			enable: {
				desktop: true,
				mobile: true,
			},
			height: "10%",
			switchable: true,
		},
		carousel: {
			enable: false,
			interval: 5000,
			transitionEffect: "zoom",
			switchable: true,
		},
	},
	banner: {
		position: "0% 20%",
	},
	overlay: {
		switchable: {
			opacity: true,
			blur: true,
			cardOpacity: true,
		},
		zIndex: -1,
		opacity: 0.8,
		blur: 10,
		cardOpacity: 0.5,
	},
	fullscreen: {
		position: "center",
	},
};
