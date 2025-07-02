/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {  // 配置项 自定义样式
        extend: {
            colors: {  // 自定义颜色
                'pc': 'var(--el-color-primary)',
            },
            fontSize: {  // 自定义字体大小
                ms: '10px',
                xs: '12px',
                sm: '14px',
                base: '16px',
                lg: '18px',
                xl: '20px',
                '2xl': '24px',
                '3xl': '28px',
                '4xl': '32px',
                '5xl': '36px',
                '6xl': '48px',
            },
            
            width: { //自定义宽度
                'f': '100vw',
                '24': '24px',
                '32': '32px',
                '42': '42px',
                '46': '46px',
                '200': '200px',
            },
            
            height: { // 自定义高度
                'f': '100vh',
                '4': '4px',
                '24': '24px',
                '32': '32px',
                '42': '42px',
                '200': '200px',
            },
            
            borderColor: {
                'pc': 'var(--van-primary-color)',
                'bc': 'var(--van-border-color)',
            },
            
            backgroundColor: {
                'pc': 'var(--van-primary-color)',
                'bc': 'var(--van-background-color)',
                'bc4': 'var(--van-background-4)',
                'bc5': 'var(--van-background-5)',
                'tc': 'var(--van-text-color)',
            },
            spacing: {  // 自定义间距
                '0': '0px',
                '0.5': '2px',
                '1': '4px',
                '2': '8px',
                '3': '12px',
                '4': '16px',
                '5': '20px',
                '6': '24px',
                '7': '28px',
                '8': '32px',
                '9': '36px',
                '10': '40px',
                '11': '44px',
                '12': '48px',
                '14': '56px',
                '16': '64px',
                '20': '80px',
                '24': '96px',
                '28': '112px',
                '32': '128px',
                '35': '140px',
                '36': '144px',
                '40': '160px',
                '44': '176px',
                '48': '192px',
                '52': '208px',
                '56': '224px',
                '60': '240px',
                '64': '256px',
                '72': '288px',
                '80': '320px',
                '96': '384px',
                '100': '400px',
            }
        },
    },
    plugins: [  // 插件
    
    ],
}

