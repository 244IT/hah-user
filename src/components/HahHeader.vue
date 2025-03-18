<template>
    <header id="header">
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
                        text: '首页'
                    },
                    {
                        text: '学习'
                    },
                    {
                        text: '留言'
                    },
                    {
                        text: '我的'
                    },
                ],
                activedIndex: 0
            }
        },
        methods: {
            onNav(index) {
                this.activedIndex = index
            }
        }
    }
</script>

<style lang="scss" scoped>
#header {
    display: flex;
    justify-content: space-between;
    padding:  0 60px;
    border-bottom: 1px solid rgba(60, 60, 67, .12);
    #title {
        line-height: 60px;
        font-size: 22px;
        font-weight: bold;
        color: #4d6bfe;
    }
    .nav {
        display: flex;
        &-item {
            height: 60px;
            padding: 0 18px;
            line-height: 60px;
            font-size: 16px;
        }
    }

    .actived {
        position: relative;
        color: #4d6bfe;
        &::after {
            content: '';
            position: absolute;
            bottom: 6px;
            left: 0;
            right: 0;
            height: 4px;
            width: 12px;
            margin: 0 auto;
            background-color: #4d6bfe;
            border-radius: 2px;
        }
    }
}
</style>