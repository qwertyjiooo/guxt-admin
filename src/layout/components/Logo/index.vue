<template>
    <div class="logo logo_is_hidden logo_hidden" :style="useAppStore.global.appThemeStyle != 'default' ? 'width: var(--aside_width)' : ''">
        <span class="icon"><el-icon size="30">
                <Bowl />
            </el-icon>
        </span>
        <div v-if="useAppStore.global.appThemeStyle == 'default' && isLogoVisible" style="padding: 0 10px 0 10px;">{{ setting.websiteInfo.name }}</div>
        <div v-if="useAppStore.global.appThemeStyle != 'default'" style="padding: 0 10px 0 10px;">{{ setting.websiteInfo.name }}</div>
    </div>
</template>

<script setup>
import { Bowl } from '@element-plus/icons-vue';
import setting from '@/setting'
import { useSidebarLogoVisibility } from '@/hooks/useSidebarLogoVisibility';
import { useAppSettingStore } from '@/stores/AppSetting'
const { isLogoVisible } = useSidebarLogoVisibility();
const useAppStore = useAppSettingStore();

</script>

<style lang="scss" scoped>
.logo {
    display: flex;
    align-items: center;
    height: var(--header_height);
    font-size: 16px;
    font-weight: bold;
    background-color: var(--main-background);
    border-bottom: 1px solid var(--main-border-color);
    overflow: hidden;
    // 文字不换行
    white-space: nowrap;
    box-sizing: border-box;

    .icon {
        height: 30px;
        box-sizing: border-box;
    }
}

.logo_is_hidden {
    // aside 占据一列时
    padding: 0 10px 0 17px;
}
</style>