'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    await queryInterface.bulkInsert(
    'categories', 
      [
        {id: 1, name: 'ビジネス'},
        {id: 2, name: '趣味'},
      ],{}
    ),
    await queryInterface.bulkInsert(
      'templates', 
      [
        {id: 1, name: 'ブレインストーミング', description: '複数人でアイデアを出し合い、ユニークで新しいアイデアを生み出すことを目的とした会議手法の一つ。'},
        {id: 2, name: 'ペルソナ', description: '企業や商品の典型的なターゲットとなる顧客像を定め、商品開発や販売方法などの方向性を定め共有するための手法。'},
      ],{}
    ),
    await queryInterface.bulkInsert(
      'user_types', 
      [
        {id: 1, name: 'Guest', client_id: null, secret: null, redirect_uri: null},
        {id: 2, name: 'Local', client_id: null, secret: null, redirect_uri: null},
        {id: 3, name: 'Twitter', client_id: null, secret: null, redirect_uri: null},
      ],{}
    ),
    await queryInterface.bulkInsert(
      'grades', 
      [
        {id: 1, name: 'Free', cost: 0, description: 'Freeプラン。一部機能に制限がかかりますが、登録、利用共に料金はかかりません。', valid: true},
        {id: 2, name: 'Standard', cost: 500, description: 'Standardプラン。許可されたユーザーにのみ公開するPrivateの掲示板を5つまで作成いただけます。また、一般に公開できるアクティブな掲示板を10個まで作成いただけます', valid: true},
        {id: 3, name: 'Premium1', cost: 1500, description: 'Premiumプラン。利用に制限はありません。', valid: true},
      ],{}
    ),
    await queryInterface.bulkInsert(
      'users', 
      [
        {id: 1, name: 'ユーザー', mail: 'test@gmail.com', occupation: '会社員', password: 'password', grade: 1, user_type: 2, created_at: now, updated_at: now, deleted_at: null},
        {id: 2, name: 'ユーザー2', mail: 'test2@gmail.com', occupation: '会社員', password: 'password', grade: 1, user_type: 2, created_at: now, updated_at: now, deleted_at: null},
      ],{}
    ),
    await queryInterface.bulkInsert(
      'idealists', 
      [
        {id: 1, title: '20年後の職業', owner: 'ユーザー1', user_id: 1, category: 2, deleted_at: null, good: 10, public: 0, template_id: 1, created_at: now, updated_at: now},
        {id: 2, title: '儲かるビジネス', owner: 'ユーザー2', user_id: 2, category: 1, deleted_at: null, good: 10, public: 0, template_id: 1, created_at: now, updated_at: now},
      ],{}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.bulkDelete('categories', null, {}),
      await queryInterface.bulkDelete('templates', null, {}),
      await queryInterface.bulkDelete('user_types', null, {}),
      await queryInterface.bulkDelete('grades', null, {}),
      await queryInterface.bulkDelete('users', null, {}),
      await queryInterface.bulkDelete('idealists', null, {}),
    ]
  }
};
