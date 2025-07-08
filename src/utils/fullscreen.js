// 控制全屏 的方法
export const toggleFullscreen = async () => {
    // 检查当前是否处于全屏状态
    const isFullscreen = document.fullscreenElement !== null;
    // 退出全屏
    if (isFullscreen) if (document.exitFullscreen) await document.exitFullscreen();
    // 进入全屏
    else if (document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen();
};

