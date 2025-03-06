import { ref, watch } from 'vue';
import { useAppSettingStore } from '@/stores/AppSetting';

// 处理侧边栏logo和底部更换颜色显隐时的顺滑度
export function useSidebarLogoVisibility() {
    const appSidebarStore = useAppSettingStore();
    const isLogoVisible = ref(true);

    watch(
        () => appSidebarStore.global.appSidebarStatus,
        (newStatus) => {
            if (newStatus) {
                isLogoVisible.value = false;
            } else {
                setTimeout(() => {
                    isLogoVisible.value = true;
                }, 200);
            }
        },
        { immediate: true }
    );

    return { isLogoVisible };
}
