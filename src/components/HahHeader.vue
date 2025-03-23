<template>
    <header id="header" :class="{ 'header-hidden': !visible }">
        <div id="title">HAH</div>
        <nav class="nav">
            <div 
                class="nav-item"
                :class="{ actived: activedIndex === index }"
                v-for="(item, index) in navs"
                :key="index"
                @click="onNav(index)"
            >
                {{ item.text }}
            </div>
        </nav>
    </header>       
</template>
<script>
    export default {
        data() {
            return {
                navs: [
                    {
                        text: '首页',
                        name: 'home'
                    },
                    {
                        text: '学习',
                        name: 'study'
                    },
                    {
                        text: '社区',
                        name: 'community'
                    },
                    {
                        text: '我的',
                        name: 'user'
                    },
                ],
                activedIndex: 0,
                visible: true,
                lastScrollPosition: 0
            }
        },
        mounted() {
            window.addEventListener('scroll', this.onScroll)
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.onScroll)
        },
        methods: {
            onNav(index) {
                if (this.activedIndex === index) return
                this.activedIndex = index
                this.$router.replace({
                    name: this.navs[index].name
                })
            },
            onScroll() {
                const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
                if (currentScrollPosition < 0) return
                
                // 向下滚动隐藏
                if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) return
                
                this.visible = currentScrollPosition < this.lastScrollPosition
                this.lastScrollPosition = currentScrollPosition
            }
        }
    }
</script>

<style lang="scss" scoped>
#header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    padding:  0 60px;
    border-bottom: 1px solid rgba($text-color-primary, 0.12);
    box-shadow: 0 1px 3px $border-color;
    background: white;
    transition: transform 0.3s ease;
    
    &.header-hidden {
        transform: translateY(-100%);
    }
    #title {
        line-height: 60px;
        font-size: 22px;
        font-weight: bold;
        color: $primary-color;
    }
    .nav {
        display: flex;
        &-item {
            height: 60px;
            padding: 0 18px;
            line-height: 60px;
            font-size: 16px;
            cursor: pointer;
        }
    }

    .actived {
        position: relative;
        color: $primary-color;
        &::after {
            content: '';
            position: absolute;
            bottom: 6px;
            left: 0;
            right: 0;
            height: 4px;
            width: 12px;
            margin: 0 auto;
            background-color: $primary-color;
            border-radius: 2px;
        }
    }
}
</style>
