import { ref, watch } from 'vue';
import { useAppSidebarStore } from '@/stores/AppSidebar';

// 处理侧边栏logo和底部更换颜色的显隐
export function useSidebarLogoVisibility() {
    const appSidebarStore = useAppSidebarStore();
    const isLogoVisible = ref(true);

    watch(
        () => appSidebarStore.appSidebarStatus,
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
