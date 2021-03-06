﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TWNewEgg.Models.DomainModels.Item;

namespace TWNewEgg.Models.DomainModels.Cart
{
    public class CartItem
    {
        public enum ShowOrderStatus
        {
            正常 = 0,
            隱形 = -1,
            AddtionalItemForCart = -3,
            AddtionalItemForItem = -5
        };

        public CartItem()
        {
            this.CanAddtoCart = true;
            this.GroupDiscount = new List<GroupDiscount>();
        }
        public CartItemBase CartItemBase { get; set; }
        // 台幣售價
        public int NTPrice { get; set; }
        // 台幣售價
        public int ItemID { get; set; }
        // 商品名稱
        public string ItemName { get; set; }
        // 商品二為屬性
        public string ItemPropertyName { get; set; }
        // 交易模式
        public int ItemDelvType { get; set; }
        // 市場售價
        public Nullable<decimal> OriginPrice { get; set; }
        // Item Country Name
        public string CountryofOrigin { get; set; }
        // Item Country ID
        public Nullable<int> CountryofOriginID { get; set; }
        // Item 圖片路徑
        public string ImagePath { get; set; }
        // 購物車購買最大數量
        public int MaxQty { get; set; }
        // 購物車購買數量
        public int Qty { get; set; }
        // 判斷是否可加入購物車
        public bool CanAddtoCart { get; set; }
        // 分類ID
        public int CategoryID { get; set; }
        // Item 到貨天數
        public string DelvDate { get; set; }
        // 建立日期
        public DateTime CreateDate { get; set; }
        // SellerID
        public int SellerID { get; set; }
        // 折價清單
        public List<GroupDiscount> GroupDiscount { get; set; }
        // 稅率結果
        public Taxes Taxes { get; set; }
        // 商品類型
        public int ShowOrder { get; set; }
        // 商品追蹤類型
        public int TrackStatus { get; set; }
        // 主分類ID
        public int StoreID { get; set; }

        // 依據 BSATW-173 廢四機需求增加
        // 廢四機賣場商品, Y=是癈四機 ---------------add by bruce 20160516
        public string Discard4 { get; set; }

    }
}
