#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

#author: 南宫乘风

DATA_DIR="/data"
REPO_URL="https://gitee.com/jaywcjlove/reference.git"
BRANCH="gh-pages"
MAX_BACKUPS=3

# 函数：备份旧版本
backup_old_version() {
    echo "备份旧版本..."
    mv ../reference ../reference_backup_$(date +%Y%m%d%H%M%S)
    if [ $? -eq 0 ]; then
        echo "备份完成。"
        remove_old_backups
    else
        echo "备份时出现错误。"
        exit 1
    fi
}

# 函数：删除多余备份，保留最近的三个
remove_old_backups() {
    echo "删除多余备份，保留最近的三个..."
    ls -1d ../reference_backup_* | head -n -${MAX_BACKUPS} | xargs -r rm -r
}

# 函数：拉取最新代码
clone_latest_code() {
    echo "拉取最新代码..."
    git clone $REPO_URL -b $BRANCH
    if [ $? -eq 0 ]; then
        echo "拉取最新代码完成。"
    else
        echo "拉取最新代码时出现错误。"
        exit 1
    fi
}

# 检查是否存在 DATA_DIR 目录，不存在则创建
if [ ! -d "$DATA_DIR" ]; then
    echo "目录 $DATA_DIR 不存在，创建中..."
    mkdir -p "$DATA_DIR"
    if [ $? -eq 0 ]; then
        echo "目录创建成功。"
    else
        echo "目录创建失败。"
        exit 1
    fi
fi



# 进入 /data 目录
cd $DATA_DIR

# 检查是否存在 reference 目录
if [ -d "reference" ]; then
    # 进入 reference 目录
    cd reference
    
    # 获取远程和本地的 commit 哈希值
    REMOTE_COMMIT=$(git ls-remote $REPO_URL $BRANCH | cut -f1)
    LOCAL_COMMIT=$(git rev-parse HEAD)
    
    # 比较远程和本地的 commit
    if [ "$REMOTE_COMMIT" == "$LOCAL_COMMIT" ]; then
        echo "本地 'reference' 目录已经是最新版本，无需拉取。"
    else
        echo "本地 'reference' 目录不是最新版本，开始拉取最新代码..."
        backup_old_version
        clone_latest_code
    fi
else
    # 如果目录不存在，直接克隆
    clone_latest_code
fi

echo "----------------------------------------------------------------------------"
endDate=`date +"%Y-%m-%d %H:%M:%S"`
echo "★[$endDate] Successful"
echo "----------------------------------------------------------------------------"
