import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * PUBLIC_INTERFACE
 * WireframeComponent
 * This standalone component renders a simple wireframe view for a workorder application.
 * It includes placeholder sections for Dashboard, Orders List, and Order Details.
 */
@Component({
  selector: 'app-wireframe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wireframe.component.html',
  styleUrls: ['./wireframe.component.css']
})
export class WireframeComponent { }
