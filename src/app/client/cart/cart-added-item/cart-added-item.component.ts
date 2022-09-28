import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { DatabaseServiceService } from 'src/app/services/database-service/database-service.service';

@Component({
  selector: 'app-cart-added-item',
  templateUrl: './cart-added-item.component.html',
  styleUrls: ['./cart-added-item.component.scss'],
})
export class CartAddedItemComponent implements OnInit {
  @Input() imgsrc: String = '';
  @Input() item_name: String = '';
  @Input() item_price: String = '';
  @Input() stock: String = '';
  @Input() item_count: String = '';
  @Input() total_price: String = '';
  @Input() id: any = '';
  @Output() deleted: EventEmitter<any> = new EventEmitter();
  constructor(private auth: AuthService,private databaseService:DatabaseServiceService) {}

  userId: any;
  cartId: any;

  ngOnInit() {
    return this.auth.getUser.subscribe((res) => {
      this.userId = res?.uid;
    });
  }

  getCartItem(this: any) {
    let data = {
      id: this.id,
    };
    this.deleted.emit(data);
    this.cartId = data;
    console.log(data);
    this.deleteCartItem();
  }

  delete() {
    alert('Removed');
    this.deleted.emit(true);
  }
  alert() {
    alert('Added to wishlist');
  }

  deleteCartItem() {
    this.databaseService.deleteUserCart(this.userId, this.cartId.id).then((res) => {
      console.log(res);
    });
  }
}
